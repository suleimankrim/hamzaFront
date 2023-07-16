import { Navigate } from "react-router-dom";
import { userAuth } from "../store/store";

export const Authentication = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  }
  return children;
};
export const PasswordProtecter = ({ children }) => {
  const email = userAuth.getState().auth.email;
  if (!email) {
    return <Navigate to={"/"} replace={true}></Navigate>;
  }
  return children;
};
