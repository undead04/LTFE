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
	onClick?: any;
	index?: number;
	curIndex?: number;
};

const NavItem: FC<NavItemProps> = ({
	labelText = "",
	className,
	to = "/",
	src,
	icons,
	capitalize,
	onClick,
	curIndex,
	index = -1,
}) => {
	const classes = src
		? clsx(styles.brand_img)
		: clsx("text-light", styles.nav_options, className, {
				[styles.active]: curIndex === index,
		  });
	const classes2 = src
		? clsx(styles.brand_img)
		: `text-light ${styles.nav_options} ${className} ${
				curIndex === index ? [styles.active] : ""
		  }`;
	const navContent = !icons ? (
		labelText
	) : (
		<>
			<i className={icons}></i>
			<span className="text-capitalize">{labelText}</span>
		</>
	);
	return (
		<NavLink
			tabIndex={index}
			onClick={onClick}
			to={to}
			className={classes2}
		>
			{src ? (
				<img className="img-fluid" src={src} alt="logo" />
			) : (
				<span>{navContent}</span>
			)}
		</NavLink>
	);
};

export default NavItem;
