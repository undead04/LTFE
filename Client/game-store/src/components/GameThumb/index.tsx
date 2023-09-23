import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./GameThumb.module.scss";
import clsx from "clsx";
type GameThumbProps = {
	imgsrc: string;
	title?: string;
	id: number;
	showPrice?: boolean;
	price?: number;
	discount?: number;
};

const GameThumb: React.FC<GameThumbProps> = ({
	imgsrc,
	title,
	id,
	discount = 0,
	showPrice = false,
	price = 0,
}) => {
	const priceFormat = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	});
	return (
		<Link
			to={`/games/${id}`}
			className={clsx(styles.product_wrapper, "text-white")}
		>
			<div className={clsx(styles.game_product_thumb)}>
				<div className={clsx(styles.game_product_avatar)}>
					<div>
						<div className="d-flex align-items-center overflow-hidden">
							<img
								className="img-fluid"
								src={imgsrc}
								alt="thumnail"
							/>
						</div>
					</div>
				</div>
				<div className="flex-grow-1">
					<div className={clsx(styles.game_title, "truncated")}>
						{title}
					</div>
					{showPrice ? (
						<>
							<div className={clsx(styles.game_product_description)}>
								{price === 0 ? (
									<span
										className={clsx(
											styles.game_product_price,
											"text-light",
										)}
									>
										Free
									</span>
								) : (
									<>
										{discount === 0 ? (
											<>
												<div
													className={clsx(
														styles.game_product_price,
														"text-light",
													)}
												>
													<span>{priceFormat.format(price)}</span>
												</div>
											</>
										) : (
											<>
												<div>
													<div
														className={clsx("badge bg-primary me-3", {
															[styles.isDiscount]: !discount,
														})}
													>
														-{discount}%
													</div>
												</div>
												<div className={clsx("game_price")}>
													<div
														className={clsx(
															styles.game_product_price,
															"text-decoration-line-through text-secondary",
														)}
													>
														<span>{priceFormat.format(price)}</span>
													</div>
													<div
														className={clsx(
															styles.game_product_price,
															"text-light",
														)}
													>
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
						</>
					) : (
						""
					)}
				</div>
			</div>
		</Link>
	);
};

export default GameThumb;
