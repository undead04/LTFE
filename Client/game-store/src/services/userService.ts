import api from "./api";
import ResponseWrapper from "./ResponseWrapper";

export type LoginInfo = {
	id: number;
	name: string;
	email: string;
	password: string;
	accessToken: string;
};

const login = (email: string, password: string) => {
	const data = { email, password };
	return api
		.post<ResponseWrapper<LoginInfo>>(api.url.login, data)
		.then((res) => res.data);
};

const register = (name: string, email: string, password: string) => {
	const data = { name, email, password };
	return api
		.post<ResponseWrapper<LoginInfo>>(api.url.register, data)
		.then((res) => res.data);
};
const userService = {
	login,
	register,
};

export default userService;
