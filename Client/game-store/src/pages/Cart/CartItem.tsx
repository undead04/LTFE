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
	discount: number;
	onRemove?: any;
};
const CartItem = ({
	title,
	price,
	releaseDate = new Date("9/23/2023"),
	id,
	imgSrc,
	discount,
	onRemove,
}: CartItemProps) => {
	const priceFormat = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	});
	return (
		<div className="rounded-2 bg-dark mt-4">
			<div className="d-flex p-5">
				<div className={clsx(styles.cart_item_avatar)}>
					<div>
						<img src={imgSrc} alt="gameImg" className="img-fluid" />
					</div>
				</div>
				<div className="cart_item_body flex-grow-1 ps-5">
					<div className="d-flex justify-content-end align-items-center h4">
						{price === 0 ? (
							<div className="game_price text-light">
								<span className="game_new_price fw-bold mt-3">
									Free
								</span>
							</div>
						) : (
							<>
								{discount === 0 ? (
									<>
										<div
											className={clsx(
												styles.game_new_price,
												"text-light",
											)}
										>
											<span>{priceFormat.format(price)}</span>
										</div>
									</>
								) : (
									<>
										<div
											className={clsx("badge bg-primary me-3 p-2", {
												[styles.isDiscount]: !discount,
											})}
										>
											-{discount}%
										</div>
										<div className={clsx("game_price")}>
											<div
												className={clsx(
													styles.game_old_price,
													"text-decoration-line-through text-secondary",
												)}
											>
												<span>{priceFormat.format(price)}</span>
											</div>
											<div className="text-light game_new_price">
												<span>
													{priceFormat.format(
														price * (1 - discount / 100),
													)}
												</span>
											</div>
										</div>
									</>
								)}
							</>
						)}
					</div>
					<div className="d-flex">
						<Link
							to={`/games/${id}`}
							className="fs-primary text-light"
						>
							{title}
						</Link>
					</div>
					<div className="d-flex mb-1">
						<div className="fs-secondary text-secondary">
							Available at {releaseDate.toString()}
						</div>
					</div>
					<div className="badge bg-secondary text-uppercase mb-5">
						base game
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
				<button
					onClick={onRemove}
					className="text-decoration-underline text-secondary bg-transparent border-0"
				>
					Remove
				</button>
			</div>
		</div>
	);
};

export default CartItem;
