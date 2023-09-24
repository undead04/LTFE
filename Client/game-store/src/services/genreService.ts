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

const genreSerive = {
	list,
};

export default genreSerive;
