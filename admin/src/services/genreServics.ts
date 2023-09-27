import api from "./api";
import ResponseWrapper from "./responseWrapper";

type genreInfo<T> = {
  title: string;
  genres: T;
};
export interface IGenre {
  id: number;
  typeNames: string;
}
export interface IMessage {
  typeNames: string[];
}
const list = () =>
  api
    .get<ResponseWrapper<genreInfo<IGenre[]>>>(api.url.genre)
    .then((res) => res.data);
const get = (id: number) =>
  api
    .get<ResponseWrapper<genreInfo<IGenre>>>(`${api.url.genre}/edit/${id}`)
    .then((res) => res.data);
const add = (data: IGenre) =>
  api
    .post<ResponseWrapper<genreInfo<IGenre>>>(`${api.url.genre}/store`, data)
    .then((res) => res.data);
const update = (id: number, data: IGenre) =>
  api
    .put<ResponseWrapper<genreInfo<IGenre>>>(
      `${api.url.genre}/update/${id}`,
      data
    )
    .then((res) => res.data);
const remove = (id: number) =>
  api
    .delete<ResponseWrapper<genreInfo<IGenre>>>(`${api.url.genre}/delete/${id}`)
    .then((res) => res.data);
const genreServics = {
  list,
  get,
  add,
  update,
  delete: remove,
};
export default genreServics;
