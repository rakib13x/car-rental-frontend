import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

type Location = { lng: number | null; lat: number | null; name?: string };

const MAPBOX_TOKEN = (import.meta.env.VITE_MAPBOX_TOKEN as string) || "";

mapboxgl.accessToken = MAPBOX_TOKEN;

export default function MapboxRouting() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);

  const startMarkerRef = useRef<any>(null);
  const endMarkerRef = useRef<any>(null);

  const [startLocation, setStartLocation] = useState<Location>({
    lng: null,
    lat: null,
    name: "",
  });
  const [endLocation, setEndLocation] = useState<Location>({
    lng: null,
    lat: null,
    name: "",
  });
  const [routeData, setRouteData] = useState<any>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [searchResultsStart, setSearchResultsStart] = useState<any[]>([]);
  const [searchResultsEnd, setSearchResultsEnd] = useState<any[]>([]);
  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");
  const startTimerRef = useRef<number | null>(null);
  const endTimerRef = useRef<number | null>(null);
  const [loadingRoute, setLoadingRoute] = useState(false);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [0, 0],
      zoom: 2,
    });

    mapRef.current = map;

    map.on("load", () => {
      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: { enableHighAccuracy: true },
          trackUserLocation: false,
        })
      );
    });

    // click handler to set start/end
    const onMapClick = (e: any) => {
      const { lng, lat } = e.lngLat;
      if (!startLocation.lng || !startLocation.lat) {
        handleSetStart({ lng, lat });
      } else if (!endLocation.lng || !endLocation.lat) {
        handleSetEnd({ lng, lat });
      } else {
        clearRoute();
        handleSetStart({ lng, lat });
      }
    };

    map.on("click", onMapClick);

    return () => {
      map.off("click", onMapClick);
      map.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      startLocation.lng &&
      startLocation.lat &&
      endLocation.lng &&
      endLocation.lat
    ) {
      calculateRoute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startLocation, endLocation]);

  function flyToLocation(loc: Location) {
    const map = mapRef.current;
    if (!map || !loc.lng || !loc.lat) return;
    map.flyTo({ center: [loc.lng, loc.lat], zoom: 14, duration: 1000 });
  }

  function handleSetStart(loc: Location) {
    setStartLocation((prev) => ({ ...prev, ...loc }));

    const map = mapRef.current;
    if (!map) return;

    if (startMarkerRef.current) {
      startMarkerRef.current.remove();
      startMarkerRef.current = null;
    }

    const marker = new mapboxgl.Marker({ color: "green", draggable: true })
      .setLngLat([loc.lng as number, loc.lat as number])
      .addTo(map)
      .on("dragend", () => {
        const lngLat = marker.getLngLat();
        handleSetStart({ lng: lngLat.lng, lat: lngLat.lat });
      });

    startMarkerRef.current = marker;
    flyToLocation(loc);
  }

  function handleSetEnd(loc: Location) {
    setEndLocation((prev) => ({ ...prev, ...loc }));

    const map = mapRef.current;
    if (!map) return;

    if (endMarkerRef.current) {
      endMarkerRef.current.remove();
      endMarkerRef.current = null;
    }

    const marker = new mapboxgl.Marker({ color: "red", draggable: true })
      .setLngLat([loc.lng as number, loc.lat as number])
      .addTo(map)
      .on("dragend", () => {
        const lngLat = marker.getLngLat();
        handleSetEnd({ lng: lngLat.lng, lat: lngLat.lat });
      });

    endMarkerRef.current = marker;
    flyToLocation(loc);
  }

  async function getUserCurrentLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lng: pos.coords.longitude, lat: pos.coords.latitude };
        handleSetStart(coords);
      },
      (err) => {
        console.error(err);
        alert("Unable to get current location");
      }
    );
  }

  async function searchLocation(
    query: string,
    type: "start" | "end",
    autoSelect = false
  ) {
    if (!query || query.length < 3) return;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      query
    )}.json?access_token=${MAPBOX_TOKEN}&autocomplete=true&limit=5`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      const features = json.features || [];
      if (type === "start") setSearchResultsStart(features);
      else setSearchResultsEnd(features);

      if (autoSelect && features.length) {
        const f = features[0];
        const [lng, lat] = f.center;
        const place_name = f.place_name;
        if (type === "start") handleSetStart({ lng, lat, name: place_name });
        else handleSetEnd({ lng, lat, name: place_name });
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function calculateRoute() {
    if (
      !startLocation.lng ||
      !startLocation.lat ||
      !endLocation.lng ||
      !endLocation.lat
    )
      return;
    setLoadingRoute(true);
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${startLocation.lng},${startLocation.lat};${endLocation.lng},${endLocation.lat}?geometries=geojson&access_token=${MAPBOX_TOKEN}&overview=full&steps=true`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      if (json.routes && json.routes.length) {
        const route = json.routes[0];
        setRouteData(route);
        setDistance(route.distance);
        setDuration(route.duration);
        drawRouteOnMap(route.geometry);
        fitMapToRoute();
      } else {
        alert("No route found");
      }
    } catch (err) {
      console.error(err);
      alert("Error calculating route");
    } finally {
      setLoadingRoute(false);
    }
  }

  function drawRouteOnMap(geometry: any) {
    const map = mapRef.current;
    if (!map) return;

    // remove existing
    if (map.getLayer("route-layer")) {
      try {
        map.removeLayer("route-layer");
      } catch (e) {}
    }
    if (map.getSource("route")) {
      try {
        map.removeSource("route");
      } catch (e) {}
    }

    map.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry,
      },
    });

    map.addLayer({
      id: "route-layer",
      type: "line",
      source: "route",
      layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": "#3887be", "line-width": 5, "line-opacity": 0.75 },
    });
  }

  function fitMapToRoute() {
    const map = mapRef.current;
    if (
      !map ||
      !startLocation.lng ||
      !startLocation.lat ||
      !endLocation.lng ||
      !endLocation.lat
    )
      return;
    const bounds = new mapboxgl.LngLatBounds(
      [startLocation.lng, startLocation.lat],
      [startLocation.lng, startLocation.lat]
    );
    bounds.extend([endLocation.lng as number, endLocation.lat as number]);
    map.fitBounds(bounds, { padding: 50, duration: 1000 });
  }

  function clearRoute() {
    if (startMarkerRef.current) {
      startMarkerRef.current.remove();
      startMarkerRef.current = null;
    }
    if (endMarkerRef.current) {
      endMarkerRef.current.remove();
      endMarkerRef.current = null;
    }
    const map = mapRef.current;
    if (map) {
      if (map.getLayer("route-layer")) {
        try {
          map.removeLayer("route-layer");
        } catch (e) {}
      }
      if (map.getSource("route")) {
        try {
          map.removeSource("route");
        } catch (e) {}
      }
    }
    setStartLocation({ lng: null, lat: null, name: "" });
    setEndLocation({ lng: null, lat: null, name: "" });
    setRouteData(null);
    setDistance(null);
    setDuration(null);
    setSearchResultsStart([]);
    setSearchResultsEnd([]);
    setStartInput("");
    setEndInput("");
  }

  const km = distance ? (distance / 1000).toFixed(2) : "--";
  const mins = duration ? Math.round(duration / 60) : "--";

  function selectSuggestion(feature: any, type: "start" | "end") {
    const [lng, lat] = feature.center;
    const place_name = feature.place_name;
    if (type === "start") {
      handleSetStart({ lng, lat, name: place_name });
      setStartInput(place_name);
      setSearchResultsStart([]);
    } else {
      handleSetEnd({ lng, lat, name: place_name });
      setEndInput(place_name);
      setSearchResultsEnd([]);
    }
  }

  return (
    <div className="w-full h-[500px] md:h-[600px] my-6">
      <div className="flex gap-2 mb-2">
        <div className="relative w-1/3">
          <input
            className="input input-bordered w-full"
            placeholder="From (search)"
            value={startInput}
            onChange={(e) => {
              const v = e.target.value;
              setStartInput(v);
              if (startTimerRef.current)
                window.clearTimeout(startTimerRef.current);
              startTimerRef.current = window.setTimeout(
                () => searchLocation(v, "start"),
                300
              ) as unknown as number;
            }}
          />
          {searchResultsStart.length > 0 && (
            <ul className="absolute z-50 bg-white border w-full mt-1 max-h-48 overflow-auto">
              {searchResultsStart.map((f) => (
                <li
                  key={f.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectSuggestion(f, "start")}
                >
                  {f.place_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative w-1/3">
          <input
            className="input input-bordered w-full"
            placeholder="To (search)"
            value={endInput}
            onChange={(e) => {
              const v = e.target.value;
              setEndInput(v);
              if (endTimerRef.current) window.clearTimeout(endTimerRef.current);
              endTimerRef.current = window.setTimeout(
                () => searchLocation(v, "end"),
                300
              ) as unknown as number;
            }}
          />
          {searchResultsEnd.length > 0 && (
            <ul className="absolute z-50 bg-white border w-full mt-1 max-h-48 overflow-auto">
              {searchResultsEnd.map((f) => (
                <li
                  key={f.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectSuggestion(f, "end")}
                >
                  {f.place_name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          className="btn btn-sm btn-outline"
          onClick={getUserCurrentLocation}
        >
          📍 Use Current Location
        </button>
        <button className="btn btn-sm btn-error" onClick={clearRoute}>
          Clear Route
        </button>
      </div>

      <div ref={mapContainerRef} className="w-full h-[420px] rounded" />

      <div className="mt-2">
        {loadingRoute ? (
          <div>Calculating route...</div>
        ) : routeData ? (
          <div className="p-2 bg-white/80 rounded inline-block">
            <div>Distance: {km} km</div>
            <div>Duration: {mins} mins</div>
          </div>
        ) : (
          <div className="text-sm text-gray-600">No route calculated</div>
        )}
      </div>
    </div>
  );
}
