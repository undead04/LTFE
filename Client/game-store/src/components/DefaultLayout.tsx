import * as React from "react";
import { useState, useEffect } from "react";
import Header from "../containers/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PageNotFound from "../pages/Page-not-found";
import Games from "../pages/Games";
import GameDetail from "../pages/GameDetail";
import Footer from "../containers/Footer";
import Order from "../pages/Order";
import Cart from "../pages/Cart";
import User from "../pages/User";

const DefaultLayout = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/games" element={<Games />} />
				<Route path="/games/:id" element={<GameDetail />} />
				<Route path="/order" element={<Order />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/user/:id" element={<User />} />
				<Route path="" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/page-not-found" element={<PageNotFound />} />
				<Route path="/*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</>
	);
};

export default DefaultLayout;
