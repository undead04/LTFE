import api from "./api";
import ResponseWrapper from "./responseWrapper";
type ListGameInfo<T> = {
  title: string;
  games: T[];
  typeGame: T[];
};
type gameInfo<T> = {
  title: string;
  games: T;
  typeGame: T[];
};
export interface gameMessage {
  name_Game: string[];
  description: string[];
  price: string[];
  genre: string[];
  discount: string[];
  publisher: string[];
  developer: string[];
  imageMain: string[];
  imagePaner: string[];
  imageLogo: string[];
}
export interface IGameAdd {
  id: number;
  name_Game: string;
  description: string;
  price: number;
  genre: string[];
  discount: number;
  publisher: string;
  developer: string;
  imageMain?: any;
}
export interface ITypeAdd {
  id: number;
  typeNames: string;
}

const list = () =>
  api
    .get<ResponseWrapper<ListGameInfo<IGameAdd>>>(api.url.game)
    .then((res) => res.data);
const listType = () =>
  api
    .get<ResponseWrapper<ListGameInfo<ITypeAdd>>>(api.url.game)
    .then((res) => res.data);
const get = (id: number) =>
  api
    .get<ResponseWrapper<gameInfo<IGameAdd>>>(`${api.url.game}/edit/${id}`)

    .then((res) => res.data);
const add = (data: IGameAdd) => {
  return api
    .post<ResponseWrapper<gameInfo<IGameAdd>>>(`${api.url.game}/store`, data)
    .then((res) => res.data);
};

const update = (id: number, data: IGameAdd) =>
  api
    .put<ResponseWrapper<gameInfo<IGameAdd>>>(
      `${api.url.game}/update/${id}`,
      data
    )
    .then((res) => res.data);
const remove = (id: number) =>
  api
    .delete<ResponseWrapper<gameInfo<IGameAdd>>>(`${api.url.game}/delete/${id}`)
    .then((res) => res.data);
const gameServics = {
  list,
  listType,
  get,
  add,
  update,
  delete: remove,
};
export default gameServics;
