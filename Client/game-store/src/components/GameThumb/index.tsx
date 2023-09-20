import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./GameThumb.module.scss";
import clsx from "clsx";
type GameThumbProps = {
	imgsrc: string;
	title?: string;
	id: number;
};

const GameThumb: React.FC<GameThumbProps> = ({
	imgsrc,
	title,
	id,
}) => {
	return (
		<Link
			to={`/games/${id}`}
			className={clsx(styles.product_wrapper, "text-white")}
		>
			<div className={clsx(styles.game_product_thumb)}>
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
				<span className={clsx(styles.game_title, "truncated")}>
					{title}
				</span>
			</div>
		</Link>
	);
};

export default GameThumb;
