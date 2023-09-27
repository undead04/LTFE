import ResponseWrapper from "./responseWrapper";
import api from "./api";
type benefitInfo<T> = {
  orders: T;
};
export interface IBenefi {
  id: number;
  price: number;
  name_Game: string;
  created_at: string;
}
const list = () =>
  api
    .get<ResponseWrapper<benefitInfo<IBenefi[]>>>(api.url.profile)
    .then((res) => res.data);
const benefitServe = {
  list,
};
export default benefitServe;
