import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const GameDetail = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	useEffect(() => {
		if (!/\d+/.test(id as string)) {
			navigate("/page-not-found");
		}
	}, [id, navigate]);
	return (
		<>
			<h2>Game Detail Page : {Number(id)}</h2>
		</>
	);
};

export default GameDetail;
