import api from "./api";
import ResponseWrapper from "./responseWrapper";
export interface IUser {
  id: number;
  name: string;
  role: string;
  email: string;
}
export type userInfo<T> = {
  users: T[];
};
const list = () =>
  api
    .get<ResponseWrapper<userInfo<IUser>>>(api.url.user)
    .then((res) => res.data);

const userServics = {
  list,
};
export default userServics;
