import clsx from "clsx";
import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./Disk.module.scss";

const Disk = () => {
	return (
		<>
			<a
				href="/"
				className={clsx(
					styles.disk,
					"user-select-none overflow-hidden mx-auto mx-md-0",
				)}
			>
				<img src="/hlogo.svg" alt="Disk" className="img-fluid" />
			</a>
			;
		</>
	);
};

export default Disk;
