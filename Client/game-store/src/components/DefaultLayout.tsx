import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Games from "../pages/Games";
import GameDetail from "../pages/GameDetail";
import Order from "../pages/Order";
import Cart from "../pages/Cart";
import User from "../pages/User";
import NotFound from "../pages/NotFound";

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
				<Route path="/page-not-found" element={<NotFound />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
};

export default DefaultLayout;
