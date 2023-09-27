import clsx from "clsx";
import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./Disk.module.scss";
import { Link } from "react-router-dom";

const Disk = () => {
	return (
		<>
			<Link
				to="/home"
				className={clsx(
					styles.disk,
					"user-select-none overflow-hidden mx-auto mx-md-0",
				)}
			>
				<img src="/hlogo.svg" alt="Disk" className="img-fluid" />
			</Link>
			;
		</>
	);
};

export default Disk;
