import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import styles from "./Collapse.module.scss";

type CollapseItemProps = {
	id: number;
	name: string;
	value: string;
};
const CollapseItem = ({ id, name, value }: CollapseItemProps) => {
	const [check, setCheck] = useState(false);

	// const handleCheck = () => {
	// 	setCheck((check) => !check);
	// 	console.log("check");
	// };

	return (
		<>
			<li
				className={clsx(
					{
						[styles.active]: check,
					},
					"flex-1 text-light",
				)}
				onClick={() => setCheck(!check)}
			>
				<input
					autoComplete="off"
					type="checkbox"
					name={name}
					value={id}
					hidden
					checked={check}
					onChange={() => setCheck(!check)}
					// hidden
					id={"filter-" + id}
				/>
				{value}
				{check}
			</li>
		</>
	);
};

export default CollapseItem;
