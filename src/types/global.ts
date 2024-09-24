// Define the structure for error responses
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

// Interface to describe the car object structure
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

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export interface TResponseRedux<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  totalPages?: number;
  currentPage?: number;
  totalItems?: number;
}

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};
