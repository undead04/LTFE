import * as React from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useState, useEffect, FC } from "react";
import { clsx } from "clsx";
import styles from "./Input.module.scss";
import SearchResult from "../SearchResult";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

interface InputProps
	extends DetailedHTMLProps<InputAttributes, HTMLInputElement> {
	placeholder?: string;
	id?: string;
	name?: string;
	title?: string;
	message?: string;
	inputRef?: any;
}
const Input: FC<InputProps> = ({
	placeholder,
	id,
	name,
	title,
	message,
	inputRef,
	...others
}) => {
	return (
		<>
			<div className={clsx(styles.inputGroup, "input-group")}>
				<label
					className={clsx(styles.inputGroup__label)}
					htmlFor={id}
				>
					{title}
				</label>
				<input
					ref={inputRef}
					{...others}
					id={id}
					className={clsx(styles.inputGroup__input, {
						"is-invalid": message,
					})}
					name={name}
					defaultValue=""
				/>
				<span className="text-end invalid-feedback" role="alert">
					<strong>{message}</strong>
				</span>
			</div>
		</>
	);
};

export default Input;
