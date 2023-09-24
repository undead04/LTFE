import ResponseWrapper from "./ResponseWrapper";
import api from "./api";
import { gameInfo } from "./gameService";
export interface IGenre {
	id: number;
	typeNames: string;
}

const list = () => {
	return api
		.get<ResponseWrapper<gameInfo<IGenre>>>(api.url.games)
		.then((res) => res.data);
};

const get = (genre: string) {
	return api.get<ResponseWrapper<>>
}
const genreSerive = {
	list,
};

export default genreSerive;
