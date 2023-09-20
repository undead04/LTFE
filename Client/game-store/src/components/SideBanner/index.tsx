import clsx from "clsx";
import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./SideBanner.module.scss";
import { Link } from "react-router-dom";
type SideBannerProps = {
	size?: string;
};
const SideBanner = ({ children }: React.PropsWithChildren<any>) => {
	return (
		<>
			<div className={clsx("col-md-3 d-none d-md-block")}>
				{children}
			</div>
		</>
	);
};

export default SideBanner;
