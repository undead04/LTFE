import * as React from "react";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";
import clsx from "clsx";
import cartService from "../../services/cartService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import { remove } from "../../store/reducers/cart";
const Cart = () => {
	const isLoggedIn = useSelector(
		(state: RootState) => state.auth.isLoggedIn,
	);

	const getCartList = () => {
		return cartList;
	};
	const cartList = useSelector(
		(state: RootState) => state.cart.cartList,
	);
	const dispatch = useDispatch();
	const removeCartItem = (id: number) => {
		dispatch(remove({ id }));
	};
	// const loadData = () => {
	// 	cartService.list().then(res => {
	// 		console.log(res.data);
	// 	})
	// }

	const navigate = useNavigate();
	const loadData = () => {
		if (isLoggedIn) {
			getCartList();
		} else {
			navigate("/home");
		}
	};

	// const [allPrice, setAllPrice] = useState(0);
	// const [discountPrice, setDiscountPrice] = useState(0);
	// const [subTotalPrice, setSubTotalPrice] = useState(0);

	const allP = cartList.reduce((prev, cur) => {
		return prev + cur.price;
	}, 0);

	const allD = cartList.reduce((prev, cur) => {
		return prev + (cur.discount * cur.price) / 100;
	}, 0);

	useEffect(() => {
		loadData();
	}, []);

	const priceFormat = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	});
	return (
		<>
			<section className="bg-black py-5">
				<div className="container-md">
					{cartList.length > 0 ? (
						<div className="row">
							<div className="col-12 col-md-6 col-lg-8">
								{/* <CartItem
								id={1}
								title="EA ESPORT VN VIETNAM"
								price={10000}
								imgSrc="http://localhost:8000/storage/650922e5c436b.webp"
							/> */}
								{cartList.map((item) => (
									<CartItem
										key={item.id}
										id={item.id}
										title={item.name_Game}
										price={item.price}
										discount={item.discount}
										imgSrc={item.image}
										releaseDate={item.created_at}
										onRemove={() => removeCartItem(item.id)}
									/>
								))}
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div
									className={clsx(
										styles.payment_section,
										"pt-4 pt-md-0 mt-0 mt-md-4 text-light",
									)}
								>
									<div className={clsx(styles.payment_title)}>
										Games and Apps Summary
									</div>
									<div className={clsx(styles.payment_body)}>
										<div className={clsx(styles.payment_item)}>
											<span>Price</span>
											<span>{priceFormat.format(allP)}</span>
										</div>
										<div className={clsx(styles.payment_item)}>
											<span>Sale Discount</span>
											<span>{priceFormat.format(allD)}</span>
										</div>
										<div className={clsx(styles.payment_item)}>
											<span>Taxes</span>
											<span className="text-secondary">
												Calculated at Checkout
											</span>
										</div>
										<hr />
										<div
											className={clsx(
												styles.payment_item,
												styles.payment_price,
											)}
										>
											<span>Subtotal</span>
											<span>{priceFormat.format(allP - allD)}</span>
										</div>
										<a
											href="http://localhost:8000/cart/purchase"
											className={clsx(
												styles.payment_checkout,
												"btn btn-primary btn-lg text-uppercase w-100",
											)}
										>
											check out
										</a>
									</div>
								</div>
							</div>
						</div>
					) : (
						<>
							<div className="mx-auto w-75 text-center text-light">
								<div className="text-light">
									<i
										className="fa-regular fa-face-sad-tear"
										style={{ fontSize: "10rem" }}
									/>
								</div>
								<span className="d-block display-3 mt-5">
									Your cart is empty
								</span>
								<Link
									to="/home"
									className="d-block lead text-secondary display-4"
								>
									Shop for Games &amp; Apps
								</Link>
							</div>
						</>
					)}
				</div>
			</section>
		</>
	);
};

export default Cart;
