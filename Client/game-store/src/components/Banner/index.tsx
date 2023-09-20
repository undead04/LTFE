import * as React from "react";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";

type BannerProps = {
	width?: string;
};
const Banner: React.FC<BannerProps> = ({ width = "col-md-9" }) => {
	return (
		<div className={clsx(width, styles.product_banner_wrapper)}>
			<div
				id="carouselBanner"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselBanner"
						data-bs-slide-to={0}
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselBanner"
						data-bs-slide-to={1}
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselBanner"
						data-bs-slide-to={2}
						aria-label="Slide 3"
					/>
				</div>
				<div
					className={clsx("carousel-inner", styles.carousel_wrapper)}
				>
					<Link to="/games/1">
						<div className="carousel-item active">
							<img
								src="http://127.0.0.1:8000/storage/650922e5c4d87.jpg"
								className="d-block w-100"
								alt="Game Store 3"
							/>
							<div
								className={clsx(
									styles.banner_body,
									"carousel-caption d-md-block",
								)}
							>
								<div className={clsx(styles.banner_description)}>
									<div
										className={clsx(
											styles.banner_head_name,
											"fs-big",
										)}
									>
										EA SPORTS FC™ 24 Standard Edition
									</div>
									<div
										className={clsx(
											styles.banner_head_description,
											"fs-primary truncated-2 d-none d-webkit-box",
										)}
									>
										EA SPORTS FC™ 24 welcomes you to The World’s Game:
										the most true-to-football experience ever with
										HyperMotionV, PlayStyles optimised by Opta, and a
										revolutionised Frostbite™ Engine.
									</div>
								</div>
							</div>
						</div>
					</Link>
					<Link to="/games/2">
						<div className="carousel-item">
							<img
								src="http://127.0.0.1:8000/storage/650922e5c4d87.jpg"
								className="d-block w-100"
								alt="Game Store 3"
							/>
							<div
								className={clsx(
									styles.banner_body,
									"carousel-caption d-md-block",
								)}
							>
								<div className={clsx(styles.banner_description)}>
									<div
										className={clsx(
											styles.banner_head_name,
											"fs-big",
										)}
									>
										EA SPORTS FC™ 24 Standard Edition
									</div>
									<div
										className={clsx(
											styles.banner_head_description,
											"fs-primary truncated-2 d-none d-webkit-box",
										)}
									>
										EA SPORTS FC™ 24 welcomes you to The World’s Game:
										the most true-to-football experience ever with
										HyperMotionV, PlayStyles optimised by Opta, and a
										revolutionised Frostbite™ Engine.
									</div>
								</div>
							</div>
						</div>
					</Link>
					<Link to="/games/3">
						<div className="carousel-item">
							<img
								src="http://127.0.0.1:8000/storage/650922e5c4d87.jpg"
								className="d-block w-100"
								alt="Game Store 3"
							/>
							<div
								className={clsx(
									styles.banner_body,
									"carousel-caption d-md-block",
								)}
							>
								<div className={clsx(styles.banner_description)}>
									<div
										className={clsx(
											styles.banner_head_name,
											"fs-big",
										)}
									>
										EA SPORTS FC™ 24 Standard Edition
									</div>
									<div
										className={clsx(
											styles.banner_head_description,
											"fs-primary truncated-2 d-none d-webkit-box",
										)}
									>
										EA SPORTS FC™ 24 welcomes you to The World’s Game:
										the most true-to-football experience ever with
										HyperMotionV, PlayStyles optimised by Opta, and a
										revolutionised Frostbite™ Engine.
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
