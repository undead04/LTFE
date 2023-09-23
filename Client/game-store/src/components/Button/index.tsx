import * as React from "react";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { useState, useEffect, FC } from "react";
import { clsx } from "clsx";
import styles from "./Button.module.scss";

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

interface buttonProps
	extends DetailedHTMLProps<ButtonAttributes, HTMLButtonElement> {
	title: string;
	color?: string;
}

const Button = ({
	style,
	title,
	color = "green",
	...others
}: buttonProps) => {
	return (
		<>
			<button
				className={clsx(styles.eBtn, styles[color])}
				{...others}
			>
				<span>{title}</span>
				<i></i>
			</button>
		</>
	);
};

{
	/* <button class="login_btn" style="--clr:#39FF14">
<span>Login</span><i></i></button> */
}

export default Button;

// -clr:#39FF14
