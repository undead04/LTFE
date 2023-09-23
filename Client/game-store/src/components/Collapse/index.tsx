import clsx from "clsx";
import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./Collapse.module.scss";
type CollapseProps = {
	id: string;
};
const Collapse = ({
	id,
	children,
}: React.PropsWithChildren<CollapseProps>) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className={clsx(styles.filter_genre)}>
				<div className={clsx(styles.collapse_wrapper)}>
					<button
						onClick={() => setOpen(!open)}
						className={clsx(
							styles.collapse_wrapper_button,
							"btn btn-secondary text-start",
						)}
						type="button"
						data-bs-toggle="collapse"
						aria-expanded={open}
						aria-controls={id}
					>
						<div>
							<span>Genre</span>
						</div>
						<div>
							<i className="fa-solid fa-chevron-down" />
						</div>
					</button>
				</div>
				<ul
					className={clsx("collapse", {
						show: open,
					})}
					id={id}
				>
					{children}
				</ul>
			</div>
		</>
	);
};

export default Collapse;
