import clsx from "clsx";
import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";

type CartItemProps = {
	title: string;
	price: number;
	releaseDate?: Date;
	id: number;
	imgSrc?: string;
	discount?: number;
};
const CartItem = ({
	title,
	price,
	releaseDate = new Date("9/23/2023"),
	id,
	imgSrc,
	discount,
}: CartItemProps) => {
	return (
		<div className="rounded-2 bg-dark mt-4">
			<div className="d-flex p-5">
				<div className={clsx(styles.cart_item_avatar)}>
					<div>
						<img src={imgSrc} alt="gameImg" className="img-fluid" />
					</div>
				</div>
				<div className="cart_item_body flex-grow-1 ps-5">
					<div className="d-flex justify-content-between align-items-center h4">
						<div className="badge bg-secondary text-uppercase">
							base game
						</div>
						<div className="fs-secondary">
							<div className="mt-1"></div>
						</div>
					</div>
					<div className="d-flex">
						<Link
							to={`/games/${id}`}
							className="fs-primary text-light"
						>
							{title}
						</Link>
					</div>
					<div className="d-flex mb-5">
						<div className="fs-secondary text-secondary">
							Available {releaseDate.toString()}
						</div>
					</div>
					{/* <div className="d-block mt-5 fs-secondary">
						<span>
							<i className="fa-solid fa-gem" />
						</span>
						<span>Earn 5% back in Epic Rewards</span>
					</div> */}
				</div>
			</div>
			<div className="d-flex flex-grow-1 fs-secondary fw-semibold p-5 pt-0 justify-content-between text-secondary">
				<span>
					<i className="fa-brands fa-windows" />
				</span>
				<a
					href="http://localhost:8000/cart/delete/28"
					className="text-decoration-underline text-secondary"
				>
					Remove
				</a>
			</div>
		</div>
	);
};

export default CartItem;
