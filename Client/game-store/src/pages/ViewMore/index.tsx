import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import genreSerive from "../../services/genreService";

const ViewMore = () => {
	const { genre } = useParams<{ genre: string }>();
	const navigate = useNavigate();

	if (/\d+/.test(genre as string)) {
		navigate("/page-not-found");
	}
	return (
		<>
			<section className="bg-dark">
				<div className="container-md"></div>
			</section>
		</>
	);
};

export default ViewMore;
