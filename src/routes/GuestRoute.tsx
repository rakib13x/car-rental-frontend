import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../redux/features/authSlice";
import { useAppSelector } from "../redux/hooks";

const GuestRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAppSelector(selectCurrentUser);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default GuestRoute;
