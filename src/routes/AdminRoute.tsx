import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../redux/features/authSlice";
import { useAppSelector } from "../redux/hooks";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAppSelector(selectCurrentUser);

  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
