import toast from "react-hot-toast";
import { authenticate } from "../helper/FetchHelper";

export async function userNameValidate(values) {
  const error = userNameVerify({}, values);
  const status = await authenticate(values.username);
  if (status !== 201) {
    error.username = toast.error("email not found");
  }
  return error;
}

function userNameVerify(error = {}, values) {
  if (!values.username) error.username = toast.error("UserName is required");
  if (values.username.includes(" "))
    error.username = toast.error("invalid username");
  return error;
}
