import { AxiosRequestConfig } from "axios";
import api from "./api";
import ResponseWrapper from "./ResponseWrapper";

export interface ISearchItem {
	image: string;
	price: number;
	id: number;
	discount: number;
	name_Game: string;
}

export type ISearchResult = {
	hintSearch: Array<ISearchItem>;
};

const search = (hintSearch: string) => {
	return api
		.get<ResponseWrapper<ISearchResult>>(
			`${api.url.search}/${hintSearch}`,
		)
		.then((res) => res.data);
};

// const register = (name: string, email: string, password: string) => {
// 	const data = { name, email, password };
// 	return api
// 		.post<ResponseWrapper<ISearchItem>>(api.url.search, data)
// 		.then((res) => res.data);
// };
const searchService = {
	search,
};

export default searchService;
