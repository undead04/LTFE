import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const User = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	useEffect(() => {
		if (!/\d+/.test(id as string)) {
			navigate("/page-not-found");
		}
	}, [id, navigate]);
	return (
		<>
			<h2>User id : {Number(id)}</h2>
		</>
	);
};

export default User;
