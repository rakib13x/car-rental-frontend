export interface Car {
  _id: string;
  name: string;
  image: string;
  description: string;
  pricePerHour: number;
  Manufacturers: string;
  vehicleType: string;
  rate?: number;
  status?: string;
  fuel?: string;
  seats?: number;
  transmission?: string;
}

export interface GetAllCarsResponse {
  data: Car[];
  totalPages: number;
  currentPage: number;
}

export interface GetCarByIdResponse {
  data: Car;
}
