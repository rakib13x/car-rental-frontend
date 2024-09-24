import { useState } from "react";
import { useGetAllCarsQuery } from "../redux/features/cars/carApi";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";

interface SliderValues {
  min: number;
  max: number;
  step: number;
  val1: number;
  val2: number;
}

function WidgetSlider({
  title = "Slider",
  values,
  onChange,
}: {
  title: string;
  values: SliderValues;
  onChange: (value: [number, number]) => void;
}) {
  const [range, setRange] = useState([values.val1, values.val2]);

  const handleRangeChange = (value: any) => {
    setRange(value);
    onChange(value); // pass the value to the parent component
  };

  return (
    <div className="widget py-6 px-8 mb-4 grid gap-6">
      <h3 className="text-lg">{title}</h3>

      <Slider
        defaultValue={[values.val1, values.val2]}
        max={values.max}
        min={values.min}
        step={values.step}
        value={range}
        onValueChange={handleRangeChange}
      />
    </div>
  );
}

function WidgetSelect({
  title = "Manufacturer",
  list = [],
  selectedValues,
  onChange,
}: {
  title: string;
  list: string[];
  selectedValues: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="widget px-8 mb-4 grid gap-6">
      <h3 className="text-lg">{title}</h3>
      <ul className="grid gap-3">
        {list.map((item: any, index: number) => (
          <li className="flex gap-2" key={index}>
            <Checkbox
              id={item}
              name="manufacturer"
              checked={selectedValues.includes(item)}
              onCheckedChange={() => onChange(item)}
            />
            <label
              htmlFor={item}
              className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SidebarFilter({
  onFilterChange,
}: {
  onFilterChange: (filters: any) => void;
}) {
  const { data: carData, isLoading, error } = useGetAllCarsQuery(undefined);

  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>(
    []
  );
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<string[]>(
    []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([30, 135]); // Update price range as needed

  const handleManufacturerChange = (manufacturer: string) => {
    setSelectedManufacturers((prev) =>
      prev.includes(manufacturer)
        ? prev.filter((item) => item !== manufacturer)
        : [...prev, manufacturer]
    );
  };

  const handleVehicleTypeChange = (vehicleType: string) => {
    setSelectedVehicleTypes((prev) =>
      prev.includes(vehicleType)
        ? prev.filter((item) => item !== vehicleType)
        : [...prev, vehicleType]
    );
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  const handleSearch = () => {
    // Pass only selected filters to the parent component
    const filters: any = {};
    if (selectedManufacturers.length > 0) {
      filters.manufacturers = selectedManufacturers;
    }
    if (selectedVehicleTypes.length > 0) {
      filters.vehicleTypes = selectedVehicleTypes;
    }
    filters.priceRange = priceRange;

    onFilterChange(filters); // Send the filters to the parent
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  const manufacturers = carData?.data?.map((car) => car.Manufacturers) || [];
  const vehicleTypes = carData?.data?.map((car) => car.vehicleType) || [];

  // Remove duplicates
  const uniqueManufacturers = [...new Set(manufacturers)];
  const uniqueVehicleTypes = [...new Set(vehicleTypes)];

  return (
    <div className="flex flex-col gap-6 border">
      <h3 className="py-6 px-8 text-xl bg-cyan-500 text-white">
        Filter Vehicles
      </h3>
      <WidgetSelect
        title="Manufacturers"
        list={uniqueManufacturers}
        selectedValues={selectedManufacturers}
        onChange={handleManufacturerChange}
      />
      <WidgetSlider
        title="Price Range Per Hour ($)"
        values={{ min: 10, max: 200, step: 5, val1: 30, val2: 135 }}
        onChange={handlePriceRangeChange}
      />
      <WidgetSelect
        title="Vehicle Type"
        list={uniqueVehicleTypes}
        selectedValues={selectedVehicleTypes}
        onChange={handleVehicleTypeChange}
      />
      <div className="py-3 px-8 mb-8">
        <Button
          className="text-lg rounded-none px-8 py-6 bg-orange-600"
          onClick={handleSearch}
        >
          Search Now
        </Button>
      </div>
    </div>
  );
}
