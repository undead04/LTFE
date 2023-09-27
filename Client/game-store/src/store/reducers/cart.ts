import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LoginInfo } from "../../services/userService";
import { IGame } from "../../services/gameService";
import CartItem from "./../../pages/Cart/CartItem";

interface ICartItem {
	id: number;
	name: string;
	price: number;
	discount: number;
}

interface CartState {
	cartList: Array<IGame>;
}

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartList: [],
	} as CartState,

	reducers: {
		add: (state, action: PayloadAction<{ cartItem: IGame }>) => {
			const isItemExist = state.cartList.find(
				(item) => item.id === action.payload.cartItem.id,
			);
			if (!isItemExist) {
				state.cartList = [...state.cartList, action.payload.cartItem];
			}
		},
		remove: (state, action: PayloadAction<{ id: number }>) => {
			const isItemExist = state.cartList.find(
				(item) => item.id === action.payload.id,
			);
			if (isItemExist) {
				state.cartList = state.cartList.filter(
					(item) => item.id !== action.payload.id,
				);
			}
		},
		deleteCart: (state) => {
			state.cartList = [];
		},
	},
});

export const { add, remove, deleteCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
