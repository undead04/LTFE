import clsx from "clsx";
import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./Filterbar.module.scss";
import { Link } from "react-router-dom";

type FormAttributes = React.FormHTMLAttributes<HTMLFormElement>;

interface FilterProps
	extends React.DetailedHTMLProps<FormAttributes, HTMLFormElement> {
	size?: number;
	onFilter?: any;
	amount?: number;
	onReset?: any;
}

const Filter = ({
	size = 3,
	children,
	onFilter,
	onReset,
	amount = 0,
	...others
}: React.PropsWithChildren<FilterProps>) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onFilter();
	};
	return (
		<div className={`col-md-${size}`}>
			<div className={clsx(styles.filter_games, "text-light")}>
				<form onSubmit={handleSubmit} id="filter_form" {...others}>
					<div className={clsx(styles.filter_header)}>
						<span>Filter ({amount})</span>
						<span className="text-light" onClick={onReset}>
							Reset
						</span>
					</div>
					<div>{children}</div>
					<button className="btn btn-outline-secondary w-100 py-3 fs-primary text-center mt-3">
						Apply
					</button>
				</form>
			</div>
		</div>
	);
};

export default Filter;
