import * as React from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./Footer.module.scss";
const Footer = () => {
	const scrollTopHandler = () => {
		window.scrollTo(0, 0);
	};
	return (
		<footer className="bg-dark">
			<div className="container py-3">
				<div
					className={clsx(styles.footer_wrapper, "position-relative")}
				>
					<div className="d-flex justify-content-between">
						<div>
							<a
								className={clsx("text-light", styles.contact_link)}
								href="/"
							>
								<i className="fa-brands fa-facebook" />
							</a>
							<a
								className={clsx("text-light", styles.contact_link)}
								href="/"
							>
								<i className="fa-brands fa-twitter" />
							</a>
							<a
								className={clsx("text-light", styles.contact_link)}
								href="/"
							>
								<i className="fa-brands fa-youtube" />
							</a>
						</div>
						<div>
							<button
								type="button"
								onClick={scrollTopHandler}
								className={clsx(
									"d-flex justify-content-center align-items-center btn btn-sm btn-outline-secondary rounded-2",
									styles.goup_btn,
								)}
							>
								<i className="fa-solid fa-chevron-up" />
							</button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="text-secondary lead">Resources</div>
							<div className="row">
								<div className="col-md-4">
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Support-A-Creator
										</a>
									</div>
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Distribute on Epic Games
										</a>
									</div>
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Careers
										</a>
									</div>
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Company
										</a>
									</div>
								</div>
								<div className="col-md-4">
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Fan Art Policy
										</a>
									</div>
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											UX Research
										</a>
									</div>
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Store EULA
										</a>
									</div>
								</div>
								<div className="col-md-4">
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Online Services
										</a>
									</div>
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Community Rules
										</a>
									</div>
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Epic Newsroom
										</a>
									</div>
								</div>
							</div>
							<hr />
							<div className="text-secondary lead">
								Made By Epic Games
							</div>
							<div className="row">
								<div className="col-md-4">
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Battle Breakers
										</a>
									</div>
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Fornite
										</a>
									</div>
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Infinity blade
										</a>
									</div>
								</div>
								<div className="col-md-4">
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Robo Recall
										</a>
									</div>
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Shadow Complex
										</a>
									</div>
									<div>
										<a
											className={clsx(
												"text-white",
												styles.footer_link,
											)}
											href="/"
										>
											Unreal Tournament
										</a>
									</div>
								</div>
							</div>
							<hr />
							<div
								className={clsx(
									styles.footer_copyright,
									"text-secondary",
								)}
							>
								© 2023, Epic Games, Inc. All rights reserved. Epic,
								Epic Games, the Epic Games logo, Fortnite, the
								Fortnite logo, Unreal, Unreal Engine, the Unreal
								Engine logo, Unreal Tournament, and the Unreal
								Tournament logo are trademarks or registered
								trademarks of Epic Games, Inc. in the United States of
								America and elsewhere. Other brands or product names
								are the trademarks of their respective owners.
							</div>
							<hr />
							<div>
								<span>
									<a className="text-light pe-3" href="/">
										Terms of Service
									</a>
								</span>
								<span>
									<a className="text-light pe-3" href="/">
										Privacy policy
									</a>
								</span>
								<span>
									<a className="text-light pe-3" href="/">
										Store refund policy
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
