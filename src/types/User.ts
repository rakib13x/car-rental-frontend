export interface User {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  phone: string;
  address: string;
  profilePhoto?: string | null;
  status: "active" | "blocked";
  createdAt: string;
  updatedAt: string;
}
