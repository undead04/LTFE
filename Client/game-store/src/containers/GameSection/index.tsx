import clsx from "clsx";
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
type GameSectionProps = {
	title?: string;
	children: React.PropsWithChildren;
	isScroll?: boolean;
	viewMore?: boolean;
	size?: number;
	color?: string;
};
const GameSection = ({
	title,
	children,
	isScroll = false,
	viewMore,
	size = 0,
	color = "transparent",
}: React.PropsWithChildren<GameSectionProps>) => {
	const xSlideDOM = document.querySelector(".carousel_multiple");
	if (xSlideDOM !== null && isScroll) {
		if (xSlideDOM.clientWidth > 500) {
			const maxScollX = xSlideDOM.scrollWidth - xSlideDOM.clientWidth;
			setInterval(() => {
				xSlideDOM.scrollLeft += xSlideDOM.scrollWidth * 0.2;
				if (xSlideDOM.scrollLeft >= maxScollX + 10) {
					const timeOutId = setTimeout(() => {
						xSlideDOM.scrollLeft = 0;
						clearTimeout(timeOutId);
					}, 3000);
				}
			}, 3000);
		}
	}
	return (
		<section className={clsx("py-5", ` bg-${color} col-md-${size}`)}>
			<div className="container-md">
				<div className="d-flex justify-content-between align-items-center">
					{title ? (
						<Link to={"/"}>
							<h2 className="text-white my-3 text-capitalize">
								{title}
							</h2>
						</Link>
					) : (
						""
					)}
					{viewMore ? (
						<Link
							className="btn btn-outline-secondary text-uppercase text-light px-5 py-3"
							to={`/viewMore/${title}`}
						>
							view More
						</Link>
					) : (
						""
					)}
				</div>
				<div
					className={clsx("row g-0 g-md-2", {
						"flex-nowrap overflow-x-scroll carousel_multiple": !size,
					})}
				>
					{children}
				</div>
			</div>
		</section>
	);
};

export default GameSection;
