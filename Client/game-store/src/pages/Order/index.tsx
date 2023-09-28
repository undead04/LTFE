import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userService from "../../services/userService";
import type { OrderInfo } from "../../services/userService";
import type { OrderDetailInfo } from "../../services/userService";
import { priceFormat } from "../../utils/currency";
const Order = () => {
	const userLoginId = useSelector(
		(state: RootState) => state.auth.userInfo?.id,
	);
	const navigate = useNavigate();
	const [orders, setOrders] = useState<OrderInfo[]>([]);
	const [order, setOrder] = useState<Array<Array<OrderDetailInfo>>>(
		[],
	);
	const loadData = () => {
		if (!!userLoginId) {
			userService.order(userLoginId).then((res) => {
				console.log(res.data.ordersDetail);
				setOrders(res.data.orders);
				setOrder(res.data.ordersDetail);
				document.title = res.data.title;
			});
		} else {
			navigate("/login");
			toast.warning("You have to login to do these actions!");
		}
	};

	useEffect(() => {
		loadData();
	}, []);
	return (
		<>
			<section className="bg-black">
				<div className="container-md">
					<div className="mb-3 mb-md-5">
						<div className="page_heading text-light">Order</div>
					</div>
					<div className="order_list">
						<div className="table-responsive">
							<table className="table align-middle table-dark text-light table-bordered border-light table-hover w-100 text-center fs-secondary">
								<colgroup>
									<col style={{ width: "10%" }} />
									<col style={{ width: "55%" }} />
									<col style={{ width: "20%" }} />
									<col style={{ width: "15%" }} />
								</colgroup>
								<thead>
									<tr>
										<th>ID</th>
										<th>
											<table className="table-dark w-100">
												<thead>
													<tr>
														<td>Name</td>
													</tr>
												</thead>
											</table>
										</th>
										<th>Buy At</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody className="table-group-divider">
									{orders.map((item, index) => (
										<tr key={item.id}>
											<td>{item.id}</td>
											<td>
												{/* {order[index].map((orderItem) => {
													<table className="table-dark table-striped w-100">
														<colgroup>
															<col style={{ width: "60%" }} />
															<col style={{ width: "40%" }} />
														</colgroup>
														<tbody>
															<tr>
																<td>
																	<a
																		className="link-success text-nowrap"
																		href="/"
																	>
																		{orderItem.name_Game}
																	</a>
																</td>
															</tr>
														</tbody>
													</table>;
												})} */}
												{order[index].map((it) => (
													<table key={it.id}>
														<colgroup>
															<col style={{ width: "60%" }} />
															<col style={{ width: "40%" }} />
														</colgroup>
														<tbody>
															<tr>
																<td>
																	<a
																		className="link-success text-nowrap"
																		href="/"
																	>
																		{it.name_Game}
																	</a>
																</td>
															</tr>
														</tbody>
													</table>
												))}
											</td>
											<td>{item.created_at.toLocaleString()}</td>
											<td>{priceFormat.format(item.total)}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="user_balance d-none d-md-block col-md-2" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Order;
