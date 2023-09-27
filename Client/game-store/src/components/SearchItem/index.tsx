import * as React from "react";
import { useState, FC } from "react";
import styles from "./SearchItem.module.scss";
import { clsx } from "clsx";
import { Link } from "react-router-dom";

type Props = {
	value: string;
	imgsrc: string;
	id: number;
};
const SearchItem: FC<Props> = ({ id, imgsrc, value }) => {
	return (
		<>
			<Link to={`/games/${id}`} className={styles.game_product_thumb}>
				<div className={clsx(styles.game_product_avatar)}>
					<div>
						<div className="d-flex align-items-center overflow-hidden">
							<img
								className="img-fluid"
								src={imgsrc}
								alt="thumnail"
							/>
						</div>
					</div>
				</div>
				<span
					className={clsx(styles.game_title, "truncated text-light")}
				>
					{value}
				</span>
			</Link>
		</>
	);
};

export default SearchItem;
