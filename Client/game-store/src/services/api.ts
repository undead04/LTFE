import axios from "axios";
import store, { RootState } from "../store";

const url = {
	baseUrl: "http://127.0.0.1:8000/api/",
	games: "/games",
	home: "/home",
	login: "member/login",
	cart: "/cart",
	register: "/member/register",
	search: "/search",
	account: "/myAccount",
};

const instance = axios.create({
	baseURL: url.baseUrl,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

instance.interceptors.request.use((request) => {
	const state: RootState = store.getState(); //get current state
	if (state.auth.token) {
		request.headers.Authorization = `Bearer ${state.auth.token}`;
	}
	if (state.cart.cartList) {
		request.headers.Authorization = `Beare ${state.cart.cartList}`;
	}
	return request;
});

instance.interceptors.response.use(
	(response) => response,
	(err) => {
		// if (err.code === "ERR_NETWORK") {
		// 	window.location.href = "/network-error";
		// } else {
		// 	switch (err.response.status) {
		// 		case 401:
		// 			window.location.href = "/login";
		// 			break;
		// 		case 403:
		// 			window.location.href = "/network-error";
		// 			break;
		// 		case 404:
		// 			window.location.href = "page-not-found";
		// 			break;
		// 		default:
		// 			break;
		// 	}
		// }
		return Promise.reject(err);
	},
);

const api = {
	url,
	get: instance.get,
	post: instance.post,
	put: instance.put,
	delete: instance.delete,
	patch: instance.patch,
};

export default api;
