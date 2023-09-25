import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import genreSerive from "../../services/genreService";
import gameService, { IGame } from "../../services/gameService";
import GameCard from "../../components/GameCard";

const ViewMore = () => {
	const [games, setGames] = useState<IGame[]>([]);
	const { genre } = useParams<{ genre: string }>();
	const navigate = useNavigate();
	const loadData = () => {
		gameService
			.listByGenre(String(genre))
			.then((res) => setGames(res.data.games));
	};
	useEffect(() => {
		if (/\d+/.test(genre as string)) {
			navigate("/page-not-found");
		}
		loadData();
	}, [navigate]);
	console.log(games);
	return (
		<>
			<section className="bg-dark py-5">
				<div className="container-md">
					<div className="row g-0 g-md-5">
						<h1 className="display-3 fw-normal text-light text-capitalize">
							{genre}
						</h1>
						{games.map((item) => (
							<GameCard
								id={item.id}
								title={item.name_Game}
								price={item.price}
								discount={item.discount}
								size="6:3:2-4"
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default ViewMore;
