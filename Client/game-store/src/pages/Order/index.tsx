import * as React from "react";
import { useState, useEffect } from "react";

const Order = () => {
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
									<col style={{ width: "75%" }} />
									<col style={{ width: "15%" }} />
								</colgroup>
								<thead>
									<tr>
										<th>ID</th>
										<th>
											<table className="table-dark w-100">
												<colgroup>
													<col style={{ width: "60%" }} />
													<col style={{ width: "40%" }} />
												</colgroup>
												<thead>
													<tr>
														<td>Name</td>
														<td>Buy At</td>
													</tr>
												</thead>
											</table>
										</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody className="table-group-divider">
									<tr>
										<td>1</td>
										<td>
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
																href="http://localhost:8000/games/27"
															>
																EA SPORTS FC™ 24 Standard Edition
															</a>
														</td>
														<td>2023-09-19 04:26:13</td>
													</tr>
													<tr>
														<td>
															<a
																className="link-success text-nowrap"
																href="http://localhost:8000/games/28"
															>
																Test
															</a>
														</td>
														<td>2023-09-19 04:36:24</td>
													</tr>
												</tbody>
											</table>
										</td>
										<td>₫790,000</td>
									</tr>
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
