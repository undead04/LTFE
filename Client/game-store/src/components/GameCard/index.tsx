import * as React from "react";
import { useState, useEffect } from "react";

import styles from "./GameCard.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

type GameCardProps = {
	imgsrc?: string;
	id: number;
	title: string;
	price: number;
	discount: number;
	size?: string;
	color?: string;
	description?: string;
};
const GameCard: React.FC<GameCardProps> = ({
	imgsrc,
	id,
	title,
	price,
	discount,
	size = "6:4:2-4",
	color = "dark",
	description,
}) => {
	const sizeArray = size.split(":");
	const priceFormat = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	});
	return (
		<div
			className={`col-${sizeArray[0]} col-md-${sizeArray[1]} col-md-${sizeArray[2]}`}
		>
			<div>
				<Link to={`/games/${id}`}>
					<div className={clsx(`card bg-${color}`)}>
						<div className={clsx(styles.game_picture)}>
							<div
								className={clsx(styles.game_picture_wrapper, {
									[styles.txf]: description,
								})}
							>
								<img
									className="img-fluid"
									src={imgsrc}
									alt="gameImage"
								/>
							</div>
						</div>
						<div className="card-body">
							<div className="card-text text-secondary game_base">
								BASE GAME
							</div>
							<div
								className={clsx(
									styles.game_title,
									"card-text text-light truncated ps-0",
								)}
							>
								{title}
							</div>
							{description ? (
								<p
									className={clsx(
										styles.game_description,
										"card-text truncated-3",
									)}
								>
									{description}
								</p>
							) : null}

							<div
								className={clsx(
									styles.game_price,
									"card-footer d-flex align-items-center justify-content-between",
								)}
							>
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
													className={clsx("badge bg-primary me-3", {
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
								{/* <div className="game_price text-light">
									<span className="game_new_price fw-bold mt-3">
										Free
									</span>
								</div> */}

								{/* // @endif */}
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default GameCard;
