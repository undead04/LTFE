import ResponseWrapper from "./ResponseWrapper";
import api from "./api";
import { IGame } from "./gameService";

type ICart = {
	total: number;
	discount: number;
	"total-Price": number;
	games: Array<IGame>;
};

export interface IGenre {
	id: number;
	typeNames: string;
}

const checkout = (id: number, cart: Array<IGame>) => {
	// id is userId, cart is localStorage cart
	const data = { id, cart };
	return api
		.post<ResponseWrapper<ICart>>(`${api.url.cart}/purchase`, data)
		.then((res) => res.data);
};

const checkoutNow = (id: number, userId: number) => {
	const data = { userId };
	return api
		.post<ResponseWrapper<null>>(
			`${api.url.cart}/purchaseNow/${id}`,
			data,
		)
		.then((res) => res.data);
};

const shoppingService = {
	checkout,
	checkoutNow,
};

export default shoppingService;
