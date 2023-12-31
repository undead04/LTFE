import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";

import styles from "./GameDetail.module.scss";
import Image from "../../components/Image";
import gameService, { IGame } from "../../services/gameService";
import { add } from "../../store/reducers/cart";
import shoppingService from "../../services/shoppingService";
import { RootState } from "../../store";

const GameDetail = () => {
	const dispatch = useDispatch();
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const [game, setGame] = useState<IGame>();
	const [genre, setGenre] = useState<Array<String>>([]);
	const userInfoId = useSelector(
		(state: RootState) => state.auth.userInfo?.id,
	);

	const loadData = () => {
		gameService.get(Number(id)).then((res) => {
			if (res.errorCode === 0) {
				setGame(res.data.game);
				if (res.data.type) {
					setGenre(res.data.type);
				}
			}
		});
	};

	const addCartHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (userInfoId) {
			if (game) {
				dispatch(add({ cartItem: game }));
				toast.info("Game has been added to your cart!");
			}
		} else {
			navigate("/login");
			toast.warning("You need to login before do these actions");
		}
	};

	const buyNowHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (userInfoId) {
			shoppingService
				.checkoutNow(Number(id), Number(userInfoId))
				.then((res) => {
					if (res.errorCode === 0) {
						console.log(res.message);
						handleClose();

						toast.success(res.message);
					} else {
						navigate("/page-not-found");
					}
				});
		} else {
			navigate("/login");
			toast.warning("You need to login before do these actions");
		}
	};
	useEffect(() => {
		if (!/\d+/.test(id as string)) {
			navigate("/page-not-found");
		}
		loadData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, navigate]);

	let price = game?.price || 0;
	let discount = game?.discount || 0;

	const priceFormat = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	});
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			{/* <h2>Game Detail Page : {Number(id)}</h2> */}
			<section className="bg-black py-5">
				<div className="container-md">
					<div className="row">
						<div className="col-12 col-md-5 col-lg-7">
							<div className="display-3 text-light py-2 fw-normal text-nowrap truncated">
								{game?.name_Game}
							</div>
							<span className="text-light display-6 fw-normal border-bottom d-inline-block mb-2 border-2">
								Overview
							</span>
							<div className="mb-2 mb-md-5">
								<Image src={game?.["image-paner"]} />
							</div>
							<div className="text-light mb-0 mb-md-3 fw-semibold fs-primary">
								Description
							</div>
							<div>
								<div className={clsx(styles.game_details_tag)}>
									<div className="text-secondary fw-semibold fs-secondary">
										Genres
									</div>
									{genre.map((item, index) => (
										<Link
											key={index}
											to={`/viewMore/${item}`}
											className="text-capitalize"
										>
											{item}
										</Link>
									))}
								</div>
							</div>

							<div className="box mt-3 mt-md-5">
								<div className="box-heading">
									<div className="text-light mb-0 mb-md-3 fw-semibold fs-primary">
										{game?.name_Game}
									</div>
									<div className="box-body">
										<div className="box-description">
											<p>{game?.description}</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 offset-md-1 col-md-6 offset-lg-1 col-lg-4 text-center">
							<div className="">
								<Image src={game?.["image-logo"]} />
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

								<button
									type="submit"
									onClick={handleShow}
									className="my-3 w-100 py-3 btn btn-lg btn-primary text-center"
								>
									{price * (1 - discount / 100) === 0
										? "GET GAME"
										: "BUY NOW"}
								</button>
								<form onSubmit={addCartHandler}>
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
										<span>{game?.developer}</span>
									</li>
									<li className="fs-secondary text-light d-flex justify-content-between p-3">
										<span>Publisher</span>
										<span>{game?.publisher}</span>
									</li>
									<li className="fs-secondary text-light d-flex justify-content-between p-3">
										<span>Realease Date</span>
										<span>
											{game?.created_at ? (
												<>
													{new Date(game?.created_at).toDateString()}
												</>
											) : (
												""
											)}
										</span>
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
			<Modal centered size="lg" show={show} onHide={handleClose}>
				<Modal.Header className="bg-secondary" closeButton>
					<Modal.Title className="text-light fs-primary">
						Buy game now
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="bg-dark text-light fs-secondary">
					Confirm your choice
				</Modal.Body>
				<Modal.Footer className="bg-secondary">
					<Button
						size="lg"
						variant="outline-light"
						onClick={handleClose}
					>
						Not now
					</Button>
					<form onSubmit={buyNowHandler} method="post">
						<Button size="lg" variant="outline-light" type="submit">
							Okay, no problem
						</Button>
					</form>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default GameDetail;
