import * as React from "react";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Disk from "../../components/Disk";
import { Link, useNavigate } from "react-router-dom";
import userService from "../../services/userService";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/auth";
const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [message, setMessage] = useState<string>("");
	const emailRef = React.createRef<any>();
	const passwordRef = React.createRef<any>();

	const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;
		userService.login(email, password).then((res) => {
			if (res.errorCode === 0) {
				setMessage("");
				dispatch(
					login({
						token: res.data.accessToken,
						userInfo: res.data,
					}),
				);
				navigate("/home");
			} else {
				setMessage(res.message);
			}
		});
	};
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
							<form onSubmit={formSubmitHandler}>
								<div className="text-light text-center fw-bold mb-5 display-3">
									Login
								</div>
								<Input
									inputRef={emailRef}
									title="EMAIL"
									type="email"
									message={message}
								/>
								<Input
									inputRef={passwordRef}
									title="PASSWORD"
									type="password"
									message={message}
								/>
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
