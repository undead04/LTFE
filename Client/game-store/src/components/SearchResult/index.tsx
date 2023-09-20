import { useState, useEffect, FC } from "react";
import { clsx } from "clsx";
import styles from "./SearchResult.module.scss";
import SearchItem from "../SearchItem";

const SearchResult = () => {
	return (
		<div className={clsx(styles.search_results, "row")}>
			<div id={styles.ListGames} className="col-12">
				<div>
					<div
						className={clsx(
							styles.search_result_title,
							"bg-dark border-bottom border-secondary text-light",
						)}
					>
						2 games found
					</div>
					<div
						className={clsx(
							styles.search_result_wrapper,
							"text-white bg-dark",
						)}
					>
						<SearchItem
							id="1"
							value="EA ESPORT REVOLUTION"
							imgsrc="http://127.0.0.1:8000/storage/650922e5c436b.webp"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchResult;
