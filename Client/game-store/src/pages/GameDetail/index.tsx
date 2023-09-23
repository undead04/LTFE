import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Image from "../../components/Image";
import clsx from "clsx";
import styles from "./GameDetail.module.scss";
import Button from "../../components/Button";

// type GameDetailProps = {
// 	title: string;
// 	imgBanner: string;
// 	imgLogo: string;
// 	price: number;
// 	discount: number;
// 	developer?: string;
// 	publisher?: string;
// 	genre?: string;
// 	releaseDate?: Date;
// };
const GameDetail = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	useEffect(() => {
		if (!/\d+/.test(id as string)) {
			navigate("/page-not-found");
		}
	}, [id, navigate]);

	useEffect(() => {
		// Call APT
	}, []);
	let price = 10000;
	let discount = 10;

	const priceFormat = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	});
	return (
		<>
			{/* <h2>Game Detail Page : {Number(id)}</h2> */}
			<section className="bg-black py-5">
				<div className="container-md">
					<div className="row">
						<div className="col-12 col-md-5 col-lg-7">
							<div className="display-3 text-light py-2 fw-normal text-nowrap truncated">
								EA ESPORT SOCCER VN 2023
							</div>
							<span className="text-light display-6 fw-normal border-bottom d-inline-block mb-2 border-2">
								Overview
							</span>
							<div className="mb-2 mb-md-5">
								<Image src="http://localhost:8000/storage/65092548f3597.png" />
							</div>
							<div className="text-light mb-0 mb-md-3 fw-semibold fs-primary">
								Description
							</div>
							<div>
								<div className={clsx(styles.game_details_tag)}>
									<div className="text-secondary fw-semibold fs-secondary">
										Genres
									</div>
									<a href="/">Action</a>
									<a href="/">Action-Adventure</a>
									<a href="/">Adventure</a>
									<a href="/">Open World</a>
									<a href="/">Party</a>
									<a href="/">Platformer</a>
								</div>
							</div>

							<div className="box mt-3 mt-md-5">
								<div className="box-heading">
									<div className="text-light mb-0 mb-md-3 fw-semibold fs-primary">
										EA ESPORT VN PLUS SOCCER
									</div>
									<div className="box-body">
										<div className="box-description">
											<p>
												The best way to consume React-Bootstrap is via
												the npm package which you can install with npm
												(or yarn if you prefer).
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 offset-md-1 col-md-6 offset-lg-1 col-lg-4 text-center">
							<div className="">
								<Image src="http://localhost:8000/storage/650922e5c4906.webp" />
								<div className="mt-4 align-items-center  d-flex">
									<div className="badge bg-secondary small p-3">
										BASE GAME
									</div>
									<div className="badge bg-secondary small p-3 ms-2">
										EARLY ACCESS
									</div>
								</div>
								<div className="d-flex justify-content-end align-items-center">
									{price !== 0 ? (
										<div>
											{discount === 0 ? (
												<div className="fs-primary text-light">
													{priceFormat.format(
														price * (1 - discount / 100),
													)}
												</div>
											) : (
												<>
													<div className="d-flex align-items-center me-2">
														<div className="badge bg-primary py-2 px-3 fs-primary me-2">
															-{discount}%
														</div>
														<div className="text-secondary fs-secondary text-decoration-line-through me-2">
															{priceFormat.format(price)}
														</div>
														<div className="fs-primary text-light">
															{priceFormat.format(
																price * (1 - discount / 100),
															)}
														</div>
													</div>
												</>
											)}
										</div>
									) : (
										<div className="badge bg-secondary py-2 px-3 fs-primary">
											Free
										</div>
									)}
								</div>
								<form action="/" method="post">
									<button
										type="submit"
										className="my-3 w-100 py-3 btn btn-lg btn-primary text-center"
									>
										{price * (1 - discount / 100) === 0
											? "GET GAME"
											: "BUY NOW"}
									</button>
								</form>
								<form action="" method="post">
									<button
										type="submit"
										className="w-100 py-3 btn btn-lg btn-outline-light text-center"
									>
										ADD TO CART
									</button>
								</form>

								<ul className="fw-semibold mt-3">
									<li className="fs-secondary text-light d-flex justify-content-between p-3 w-100 w-md-75">
										<span>Epic reward</span>
										<span>5% back</span>
									</li>
									<li className="fs-secondary text-light d-flex justify-content-between p-3">
										<span>Refund type</span>
										<span>Self-Refundable</span>
									</li>
									<li className="fs-secondary text-light d-flex justify-content-between p-3">
										<span>Developer</span>
										<span>EA Canada</span>
									</li>
									<li className="fs-secondary text-light d-flex justify-content-between p-3">
										<span>Publisher</span>
										<span>Electronic Arts</span>
									</li>
									<li className="fs-secondary text-light d-flex justify-content-between p-3">
										<span>Realease Date</span>
										<span>2023-09-19 04:26:13</span>
									</li>
									<li className="fs-secondary text-light d-flex justify-content-between p-3">
										<span>Platform</span>
										<span>Window</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default GameDetail;
