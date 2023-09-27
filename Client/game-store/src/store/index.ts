import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import {
	createStateSyncMiddleware,
	initMessageListener,
} from "redux-state-sync";
import cartReducer from "./reducers/cart";

const syncConfig = {
	// All actions will be triggered in other tabs except BLACKLIST
	blacklist: ["persist/PERSIST"],
};
const autPersistConfig = { key: "auth", storage };

const cartPersistConfig = { key: "cart", storage };
const rootReducer = combineReducers({
	auth: persistReducer(autPersistConfig, authReducer),
	cart: persistReducer(cartPersistConfig, cartReducer),
});

const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk, createStateSyncMiddleware(syncConfig)],
});

initMessageListener(store);

export type RootState = ReturnType<typeof store.getState>;
export default store;
export const persistor = persistStore(store);
