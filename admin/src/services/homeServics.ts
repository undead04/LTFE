import api from "./api";
import ResponseWrapper from "./responseWrapper";
type HomeInfo = {
  userCount: number;
  total: number;
  genreCount: number;
  gameCount: number;
};
const home = () => {
  return api
    .get<ResponseWrapper<HomeInfo>>(api.url.home)
    .then((res) => res.data);
};
const homeServics = {
  home,
};
export default homeServics;
