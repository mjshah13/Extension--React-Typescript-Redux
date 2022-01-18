import { toast } from "react-toastify";

export const Error = (message: String) => toast.error(message);
export const Success = (message: String) => toast.success(message);
export const Info = (message: String) => toast.info(message);
