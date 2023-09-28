import * as React from "react";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Disk from "../../components/Disk";
import { Link, useNavigate } from "react-router-dom";
import userService from "../../services/userService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/auth";
const Register = () => {
	const navigate = useNavigate();
	const nameRef = React.createRef<any>();
	const emailRef = React.createRef<any>();
	const passwordRef = React.createRef<any>();
	const confirmRef = React.createRef<any>();
	const dispatch = useDispatch();
	const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const name = nameRef.current?.value;
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;
		const confirmPass = confirmRef.current?.value;
		if (confirmPass === password) {
			userService.register(name, email, password).then((res) => {
				if (res.errorCode === 0) {
					userService.login(email, password).then((res) => {
						if (res.errorCode === 0) {
							dispatch(
								login({
									token: res.data.accessToken,
									userInfo: res.data,
								}),
							);
							navigate("/home");
							toast.success("Register successfully");
						} else {
							toast.error(res.message);
						}
					});
				} else {
					toast.error(res.message);
				}
			});
		}
	};
	return (
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
									Register
								</div>
								<Input
									inputRef={nameRef}
									title="USERNAME"
									type="text"
									name="name"
								/>
								<Input
									inputRef={emailRef}
									title="EMAIL"
									type="email"
									name="email"
								/>
								<Input
									inputRef={passwordRef}
									title="PASSWORD"
									type="password"
									name="password"
								/>
								<Input
									inputRef={confirmRef}
									title="CONFIRM PASSWORD"
									type="password"
									name="comfirmPassword"
								/>
								<hr />
								<Button title="Register" color="red" />
								<div className="mt-5 fs-primary text-center">
									<span className="text-light fw-bold">
										Already have an account?
									</span>
									<Link
										className="text-primary fw-bold ms-2"
										to="/login"
									>
										Login
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

export default Register;
