import * as React from "react";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Disk from "../../components/Disk";
import { Link } from "react-router-dom";
const Register = () => {
	return (
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
									Register
								</div>
								<Input title="USERNAME" type="email" name="name" />
								<Input title="EMAIL" type="email" name="email" />
								<Input
									title="PASSWORD"
									type="password"
									name="password"
								/>
								<Input
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
