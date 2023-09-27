import { useState, useEffect, FC, PropsWithChildren } from "react";
import { clsx } from "clsx";
import styles from "./SearchResult.module.scss";
import SearchItem from "../SearchItem";

type SearchResultProps = {
	counter : number,
}
const SearchResult = ({ counter, children }: PropsWithChildren<SearchResultProps>) => {
	return (
		<div
			className={clsx(styles.search_results, {
				[styles.active]: counter > 0
			}, "row")}
		>
			<div id={styles.ListGames} className="col-12">
				<div>
					<div
						className={clsx(
							styles.search_result_title,
							"bg-dark border-bottom border-secondary text-light",
						)}
					>
						{ counter} games found
					</div>
					<div
						className={clsx(
							styles.search_result_wrapper,
							"text-white bg-dark",
						)}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchResult;
