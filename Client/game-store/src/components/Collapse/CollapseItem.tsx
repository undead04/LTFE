import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import styles from "./Collapse.module.scss";

type CollapseItemProps = {
	id: number;
	name: string;
	value: string;
	change?: any;
	Ischeck?: boolean;
};
const CollapseItem = ({
	id,
	name,
	value,
	change,
	Ischeck,
}: CollapseItemProps) => {
	// const handleCheck = () => {
	// 	setCheck((check) => !check);
	// 	console.log("check");
	// };
	const handleCheck = () => {
		change();
	};
	return (
		<>
			<li
				className={clsx(
					{
						[styles.active]: Ischeck,
					},
					"flex-1 text-light",
				)}
				onClick={handleCheck}
			>
				<input
					autoComplete="off"
					type="checkbox"
					name={name}
					value={id}
					hidden
					checked={Ischeck}
					onChange={handleCheck}
					// hidden
					id={"filter-" + id}
				/>
				{value}
			</li>
		</>
	);
};

export default CollapseItem;
