import * as React from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useState, useEffect, FC } from "react";
import { clsx } from "clsx";
import styles from "./SearchInput.module.scss";
import SearchResult from "../SearchResult";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

interface searchProps
	extends DetailedHTMLProps<InputAttributes, HTMLInputElement> {
	placeholder?: string;
	id?: string;
	name?: string;
	range?: string;
	searchRef?: any;
}
const SearchInput = ({
	placeholder,
	id,
	name,
	range = "d-none d-md-flex",
	children,
	searchRef,
	...others
}: React.PropsWithChildren<searchProps>) => {
	const [active, setActive] = useState(false);
	const [value, setValue] = useState("");
	const blurHandler = () => {
		const timeOutId = setTimeout(() => {
			setActive(false);
			clearTimeout(timeOutId);
		}, 2000);
	};
	useEffect(() => {}, [active]);
	return (
		<div
			className={clsx(
				styles.search_area,
				styles.headnav_item,
				"position-relative",
			)}
		>
			<div
				className={clsx(styles.headnav_search, "form-group", range)}
			>
				<span>
					<i className="fa-solid fa-magnifying-glass" />
				</span>
				<input
					id={id}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onFocus={() => setActive(true)}
					onBlur={blurHandler}
					ref={searchRef}
					{...others}
				/>
			</div>
			{active ? children : ""}
		</div>
	);
};

export default SearchInput;
