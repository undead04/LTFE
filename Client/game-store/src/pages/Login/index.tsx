import * as React from "react";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Disk from "../../components/Disk";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		// <>
		// 	<h2>Login page</h2>
		// 	<Button title="Login" color="red" />
		// 	<Input title="Email" type="email" />
		// 	<Disk />
		// </>

		<>
			<section className="bg-dark py-5">
				<div className="container-md">
					<div className="row align-items-center">
						<div className="col-md-7">
							<Disk />
						</div>
						<div className="col-md-5">
							<form action="">
								<div className="text-light text-center fw-bold mb-5 display-3">
									Login
								</div>
								<Input title="EMAIL" type="email" />
								<Input title="PASSWORD" type="password" />
								<div className="my-3 fs-secondary text-end me-4">
									<label
										className="me-3 text-white"
										htmlFor="remember"
									>
										Remember Me
									</label>
									<input
										autoComplete="off"
										className="form-check-input"
										type="checkbox"
										name="remember"
										id="remember"
									/>
								</div>
								<Button title="Login" color="green" />
								<div className="mt-5 fs-primary text-center">
									<a className="text-light fw-bold" href="/">
										Forgot your password?
									</a>
									<Link
										className="text-danger fw-bold ms-2"
										to="/register"
									>
										Register
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
