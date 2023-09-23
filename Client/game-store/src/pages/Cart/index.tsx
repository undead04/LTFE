import * as React from "react";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";
import clsx from "clsx";

const Cart = () => {
	return (
		<>
			<section className="bg-black py-5">
				<div className="container-md">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-8">
							<CartItem
								id={1}
								title="EA ESPORT VN VIETNAM"
								price={10000}
								imgSrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<CartItem
								id={2}
								title="EA ESPORT VN VIETNAM"
								price={10000}
								imgSrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
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
										<span>₫109,000</span>
									</div>
									<div className={clsx(styles.payment_item)}>
										<span>Sale Discount</span>
										<span>-₫0</span>
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
										<span>₫109,000</span>
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
				</div>
			</section>
		</>
	);
};

export default Cart;
