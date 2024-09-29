export interface TBooking {
  _id: string;
  date: Date;
  startTime: string;
  endTime: string | null;
  user: string;
  car: string;
  totalCost: number;
  status: "pending" | "approved" | "cancelled";
  createdAt?: string;
  updatedAt?: string;
}
