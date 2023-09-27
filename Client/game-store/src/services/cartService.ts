import ResponseWrapper from "./ResponseWrapper";
import api from "./api";

type ICart = {
	total: number;
	discount: number;
	"total-Price": number;
	games: Array<ICartGame>;
};

type ICartGame = {
	id: number;
	name: string;
	price: number;
	discount: number;
	image: string;
};

export interface IGenre {
	id: number;
	typeNames: string;
}

const list = () => {
	return api
		.get<ResponseWrapper<ICart>>(api.url.cart)
		.then((res) => res.data);
};

const add = (id: number) => {
	return api
		.post(`${api.url.cart}/add/${id}`)
		.then((res) => res.data);
};

const remove = (id: number) => {
	return api
		.get(`${api.url.cart}/delete/${id}`)
		.then((res) => res.data);
};

const checkout = () => {
	return api
		.get<ResponseWrapper<ICart>>(`${api.url.cart}/purchase`)
		.then((res) => res.data);
};
const cartService = {
	list,
	add,
	remove,
	checkout,
};

export default cartService;
