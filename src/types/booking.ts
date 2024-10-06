export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  region: string;
  zipCode: string;
  country: string;
  phoneNumber: string;
  nidNumber: string;
  drivingLicense: string;
}

export interface ExtraFeatures {
  insurance: boolean;
  gps: boolean;
  childSeat?: boolean;
}

export interface TBooking {
  car: any;
  _id: string;
  date: Date;
  startTime: string;
  endTime: string | null;
  user: string;
  carId: string;
  totalCost: number;
  status: "pending" | "approved" | "cancelled";
  payStatus: "paid" | "unpaid";
  personalInfo?: PersonalInfo;
  extraFeatures?: ExtraFeatures;
  carPricePerHour?: number;
  additionalFeaturesCost?: number;
  createdAt?: string;
  updatedAt?: string;
}
