import { Navigate } from "react-router-dom";
import { selectCurrentToken } from "../redux/features/authSlice";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = useAppSelector(selectCurrentToken);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
