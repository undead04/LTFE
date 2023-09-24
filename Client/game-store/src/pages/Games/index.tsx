import * as React from "react";
import { useState, useEffect } from "react";
import GameSection from "../../containers/GameSection";
import GameCard from "../../components/GameCard";
import Filter from "../../containers/Filter";
import Collapse from "../../components/Collapse";
import CollapseItem from "../../components/Collapse/CollapseItem";
import gameService from "../../services/gameService";
import { IGame } from "../../services/gameService";
import genreSerive from "../../services/genreService";
import { IGenre } from "./../../services/genreService";
const Games = () => {
	const [games, setGames] = useState<IGame[]>([]);
	const [genres, setGenres] = useState<IGenre[]>([]);
	const loadData = () => {
		gameService.list().then((res) => setGames(res.data.games));
		genreSerive.list().then((res) => setGenres(res.data.type));
	};
	useEffect(() => {
		loadData();
	}, []);
	// console.log(genres);
	return (
		<>
			<section className="bg-dark">
				<div className="container-md">
					<div className="row flex-grow-1">
						<GameSection size={9}>
							{/* <GameCard
								id={1}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								title="ESPORT SOCCER LEAGUE 2023"
								price={10000}
								discount={10}
								color="transparent"
							/>
							<GameCard
								id={1}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								title="ESPORT SOCCER LEAGUE 2023"
								price={10000}
								discount={10}
								color="transparent"
							/>
							<GameCard
								id={1}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								title="ESPORT SOCCER LEAGUE 2023"
								price={10000}
								discount={10}
								color="transparent"
							/>
							<GameCard
								id={1}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								title="ESPORT SOCCER LEAGUE 2023"
								price={10000}
								discount={10}
								color="transparent"
							/>
							<GameCard
								id={1}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								title="ESPORT SOCCER LEAGUE 2023"
								price={10000}
								discount={10}
								color="transparent"
							/>
							<GameCard
								id={1}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								title="ESPORT SOCCER LEAGUE 2023"
								price={10000}
								discount={10}
								color="transparent"
							/> */}
							{games.map((game, index) => (
								<GameCard
									key={index}
									id={game.id}
									discount={game.discount}
									price={game.price}
									title={game.name_Game}
								/>
							))}
						</GameSection>
						<Filter>
							<Collapse id="collapseTest">
								{/* <CollapseItem id="1" name="Genre[]" value="Action" />
								<CollapseItem
									id="2"
									name="Genre[]"
									value="Adventure"
								/> */}
								{genres.map((item, index) => (
									<CollapseItem
										id={item.id}
										value={item.typeNames}
										key={index}
										name="Genre[]"
									/>
								))}
							</Collapse>
						</Filter>
					</div>
				</div>
			</section>
		</>
	);
};

export default Games;
