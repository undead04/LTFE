import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import styles from "./Collapse.module.scss";

type CollapseItemProps = {
	id: number;
	name: string;
	value: string;
	change?: any;
};
const CollapseItem = ({
	id,
	name,
	value,
	change,
}: CollapseItemProps) => {
	const [check, setCheck] = useState(false);

	// const handleCheck = () => {
	// 	setCheck((check) => !check);
	// 	console.log("check");
	// };
	const handleCheck = () => {
		setCheck(!check);
		change();
	};
	return (
		<>
			<li
				className={clsx(
					{
						[styles.active]: check,
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
					checked={check}
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
