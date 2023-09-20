import React, { useState, useEffect, FC } from "react";
import { clsx } from "clsx";
import styles from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";

type NavItemProps = {
	labelText?: string;
	className?: string;
	to?: string;
	src?: string;
	icons?: string;
	capitalize?: boolean;
};

const NavItem: FC<NavItemProps> = ({
	labelText = "",
	className,
	to = "/",
	src,
	icons,
	capitalize,
}) => {
	const classes = src
		? clsx(styles.brand_img)
		: clsx("text-light", styles.nav_options, className, {
				[styles.capitalize]: capitalize,
		  });
	const navContent = !icons ? (
		labelText
	) : (
		<>
			<i className={icons}></i>
			<span className="text-capitalize">{labelText}</span>
		</>
	);
	return (
		<NavLink to={to} className={classes}>
			{src ? (
				<img className="img-fluid" src={src} alt="logo" />
			) : (
				<span>{navContent}</span>
			)}
		</NavLink>
	);
};

export default NavItem;
