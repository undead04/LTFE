import * as React from "react";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import Banner from "../../components/Banner";

const Home = () => {
	return (
		<>
			<section className="bg-black">
				<div className="container-md">
					<div className={clsx("row align-content center")}>
						<Banner />
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
