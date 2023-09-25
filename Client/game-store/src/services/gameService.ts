import api from "./api";
import ResponseWrapper from "./ResponseWrapper";

export interface IGame {
	id: number;
	name_Game: string;
	discount: number;
	image: string;
	price: number;
	description: string;
	developer?: string;
	publisher?: string;
	created_at?: Date;
	"image-paner"?: string;
	"image-logo"?: string;
}
export type gameInfo<T> = {
	title: string;
	games: T[];
	type: T[];
};

export type gameByGenreInfo = {
	title: string;
	games: Array<IGame>;
	type: string;
};

export type homePageInfo<T> = {
	title: string;
	paner: Array<T>;
	bestSaler: Array<T>;
	gameAction: Array<T>;
	gameTactical: Array<T>;
	gameCasual: Array<T>;
	gameCard: Array<T>;
	gameMMO: Array<T>;
	gameSimulation: Array<T>;
	gamePuzzle: Array<T>;
	gameAdventure: Array<T>;
	gameSports: Array<T>;
	gameStrategy: Array<T>;
	gameArcade: Array<T>;
};
export type gameSingInfo<T> = {
	title: string;
	game: T;
	type?: Array<String>;
};

export type genreListProps = {
	title: string;
	genreList: Array<IGame>;
};
const list = () => {
	return api
		.get<ResponseWrapper<gameInfo<IGame>>>(api.url.games)
		.then((res) => res.data);
};

const get = (id: number) =>
	api
		.get<ResponseWrapper<gameSingInfo<IGame>>>(
			`${api.url.games}/${id}`,
		)
		.then((res) => res.data);

const home = () => {
	return api
		.get<ResponseWrapper<homePageInfo<IGame>>>(api.url.home)
		.then((res) => res.data);
};

const listByGenre = (genre: string) => {
	return api
		.get<ResponseWrapper<gameByGenreInfo>>(
			`${api.url.games}/viewMore/${genre}`,
		)
		.then((res) => res.data);
};

const filterByGenre = (genreList: string) => {
	return api
		.post<ResponseWrapper<genreListProps>>(
			`${api.url.games}/filter/${genreList}`,
		)
		.then((res) => res.data);
};
const gameService = {
	list,
	get,
	home,
	listByGenre,
	filterByGenre,
};

export default gameService;
