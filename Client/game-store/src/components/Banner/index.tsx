import * as React from "react";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";
import { IGame } from "./../../services/gameService";
import Carousel from "react-bootstrap/Carousel";
import Image from "../Image";
type BannerProps = {
	width?: string;
	id?: string;
	data: Array<IGame>;
};
const Banner = ({
	id = "carouselBanner",
	width = "col-md-9",
	data,
}: BannerProps) => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex);
	};
	return (
		// <div className={clsx(width, styles.product_banner_wrapper)}>
		// 	<div id={id} className="carousel slide" data-bs-ride="carousel">
		// 		<div className="carousel-indicators">
		// 			{/* <button
		// 				type="button"
		// 				data-bs-target={`#${id}`}
		// 				data-bs-slide-to={0}
		// 				className="active"
		// 				aria-current="true"
		// 				aria-label="Slide 1"
		// 			/>
		// 			<button
		// 				type="button"
		// 				data-bs-target="#carouselBanner"
		// 				data-bs-slide-to={1}
		// 				aria-label="Slide 2"
		// 			/>
		// 			<button
		// 				type="button"
		// 				data-bs-target="#carouselBanner"
		// 				data-bs-slide-to={2}
		// 				aria-label="Slide 3"
		// 			/> */}
		// 			{data.map((item, key) => (
		// 				<button
		// 					type="button"
		// 					data-bs-target={`#${id}`}
		// 					data-bs-slide-to={`${key}`}
		// 					key={key}
		// 					aria-label={`Slide ${key + 1}`}
		// 				/>
		// 			))}
		// 		</div>
		// 		<div
		// 			className={clsx("carousel-inner", styles.carousel_wrapper)}
		// 		>
		// 			{data.map((item, key) => (
		// 				<Link to={`/games/${item.id}`} key={key}>
		// 					<div className={clsx("carousel-item")}>
		// 						<img
		// 							src={item.image}
		// 							className="d-block w-100"
		// 							alt={item.name_Game}
		// 						/>
		// 						<div
		// 							className={clsx(
		// 								styles.banner_body,
		// 								"carousel-caption d-md-block",
		// 							)}
		// 						>
		// 							<div className={clsx(styles.banner_description)}>
		// 								<div
		// 									className={clsx(
		// 										styles.banner_head_name,
		// 										"fs-big",
		// 									)}
		// 								>
		// 									{item.name_Game}
		// 								</div>
		// 								<div
		// 									className={clsx(
		// 										styles.banner_head_description,
		// 										"fs-primary truncated-2 d-none d-md-webkit-box",
		// 									)}
		// 								>
		// 									{item.description}
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</Link>
		// 			))}
		// 			{/* <Link to="/games/1">
		// 				<div className="carousel-item active">
		// 					<img
		// 						src="http://127.0.0.1:8000/storage/650922e5c4d87.jpg"
		// 						className="d-block w-100"
		// 						alt="Game Store 3"
		// 					/>
		// 					<div
		// 						className={clsx(
		// 							styles.banner_body,
		// 							"carousel-caption d-md-block",
		// 						)}
		// 					>
		// 						<div className={clsx(styles.banner_description)}>
		// 							<div
		// 								className={clsx(
		// 									styles.banner_head_name,
		// 									"fs-big",
		// 								)}
		// 							>
		// 								EA SPORTS FC™ 24 Standard Edition
		// 							</div>
		// 							<div
		// 								className={clsx(
		// 									styles.banner_head_description,
		// 									"fs-primary truncated-2 d-none d-md-webkit-box",
		// 								)}
		// 							>
		// 								EA SPORTS FC™ 24 welcomes you to The World’s Game:
		// 								the most true-to-football experience ever with
		// 								HyperMotionV, PlayStyles optimised by Opta, and a
		// 								revolutionised Frostbite™ Engine.
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</Link>
		// 			<Link to="/games/2">
		// 				<div className="carousel-item">
		// 					<img
		// 						src="http://127.0.0.1:8000/storage/650922e5c4d87.jpg"
		// 						className="d-block w-100"
		// 						alt="Game Store 3"
		// 					/>
		// 					<div
		// 						className={clsx(
		// 							styles.banner_body,
		// 							"carousel-caption d-md-block",
		// 						)}
		// 					>
		// 						<div className={clsx(styles.banner_description)}>
		// 							<div
		// 								className={clsx(
		// 									styles.banner_head_name,
		// 									"fs-big",
		// 								)}
		// 							>
		// 								EA SPORTS FC™ 24 Standard Edition
		// 							</div>
		// 							<div
		// 								className={clsx(
		// 									styles.banner_head_description,
		// 									"fs-primary truncated-2 d-none d-md-webkit-box",
		// 								)}
		// 							>
		// 								EA SPORTS FC™ 24 welcomes you to The World’s Game:
		// 								the most true-to-football experience ever with
		// 								HyperMotionV, PlayStyles optimised by Opta, and a
		// 								revolutionised Frostbite™ Engine.
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</Link>
		// 			<Link to="/games/3">
		// 				<div className="carousel-item">
		// 					<img
		// 						src="http://127.0.0.1:8000/storage/650922e5c4d87.jpg"
		// 						className="d-block w-100"
		// 						alt="Game Store 3"
		// 					/>
		// 					<div
		// 						className={clsx(
		// 							styles.banner_body,
		// 							"carousel-caption d-md-block",
		// 						)}
		// 					>
		// 						<div className={clsx(styles.banner_description)}>
		// 							<div
		// 								className={clsx(
		// 									styles.banner_head_name,
		// 									"fs-big",
		// 								)}
		// 							>
		// 								EA SPORTS FC™ 24 Standard Edition
		// 							</div>
		// 							<div
		// 								className={clsx(
		// 									styles.banner_head_description,
		// 									"fs-primary truncated-2 d-none d-md-webkit-box",
		// 								)}
		// 							>
		// 								EA SPORTS FC™ 24 welcomes you to The World’s Game:
		// 								the most true-to-football experience ever with
		// 								HyperMotionV, PlayStyles optimised by Opta, and a
		// 								revolutionised Frostbite™ Engine.
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</Link> */}
		// 		</div>
		// 	</div>
		// </div>
		<Carousel
			id={id}
			className={clsx(width, styles.product_banner_wrapper)}
			activeIndex={index}
			onSelect={handleSelect}
		>
			{/* <Carousel.Item>
				<Image
					src={
						"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg"
					}
					className="d-block w-100"
					alt={"Hi"}
				/>
				<Carousel.Caption
					className={clsx(styles.banner_body, "d-md-block")}
				>
					<div className={clsx(styles.banner_description)}>
						<div className={clsx(styles.banner_head_name, "fs-big")}>
							EA SPORTS FC™ 24 Standard Edition
						</div>
						<div
							className={clsx(
								styles.banner_head_description,
								"fs-primary truncated-2 d-md-md-webkit-box",
							)}
						>
							EA SPORTS FC™ 24 welcomes you to The World’s Game: the
							most true-to-football experience ever with HyperMotionV,
							PlayStyles optimised by Opta, and a revolutionised
							Frostbite™ Engine.
						</div>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image
					src={
						"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg"
					}
					className="d-block w-100"
					alt={"Hi"}
				/>
				<Carousel.Caption
					className={clsx(styles.banner_body, "d-md-block")}
				>
					<div className={clsx(styles.banner_description)}>
						<div className={clsx(styles.banner_head_name, "fs-big")}>
							EA SPORTS FC™ 24 Standard Edition
						</div>
						<div
							className={clsx(
								styles.banner_head_description,
								"fs-primary truncated-2 d-none d-md-webkit-box",
							)}
						>
							EA SPORTS FC™ 24 welcomes you to The World’s Game: the
							most true-to-football experience ever with HyperMotionV,
							PlayStyles optimised by Opta, and a revolutionised
							Frostbite™ Engine.
						</div>
					</div>
				</Carousel.Caption>
			</Carousel.Item> */}
			{data.map((item) => (
				<Carousel.Item key={item.id} interval={3000}>
					<Image
						src={item["image-paner"]}
						className="d-block w-100"
						alt={item.name_Game}
					/>
					<Carousel.Caption
						className={clsx(styles.banner_body, "d-md-block")}
					>
						<div className={clsx(styles.banner_description)}>
							<div
								className={clsx(styles.banner_head_name, "fs-big")}
							>
								{item.name_Game}
							</div>
							<div
								className={clsx(
									styles.banner_head_description,
									"fs-primary truncated-2 d-none d-md-webkit-box",
								)}
							>
								{item.description}
							</div>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Banner;
