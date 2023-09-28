import * as React from "react";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import Banner from "../../components/Banner";
import SideBanner from "../../components/SideBanner";
import GameThumb from "./../../components/GameThumb/index";
import GameSection from "../../containers/GameSection";
import GameCard from "../../components/GameCard";
import gameService, { IGame } from "../../services/gameService";

const Home = () => {
	// Lấy banner
	const [banner, setBanner] = useState<IGame[]>([]);
	const [topsaler, setTopsaler] = useState<IGame[]>([]);

	// Lấy game thể loại simulation
	const [simulation, setSimulation] = useState<IGame[]>([]);
	const [strategy, setStrategy] = useState<IGame[]>([]);
	// Lấy game thể loại adventure

	const [adventure, setAdventure] = useState<IGame[]>([]);

	// Lấy game thể loại action
	const [action, setAction] = useState<IGame[]>([]);

	const loadData = () => {
		gameService.home().then((res) => {
			setBanner(res.data.paner);
			setTopsaler(res.data.bestSaler);
			setAction(res.data.gameAction);
			setSimulation(res.data.gameSimulation);
			setAdventure(res.data.gameAdventure);
			setStrategy(res.data.gameStrategy);
		});
	};
	useEffect(() => {
		loadData();
	}, []);
	return (
		<>
			<section className="bg-black">
				<div className="container-md">
					<div className={clsx("row align-content center")}>
						{banner ? (
							<Banner id="banner_carousel" data={banner} />
						) : (
							""
						)}
						<SideBanner>
							{banner.map((item) => (
								<GameThumb
									key={item.id}
									id={item.id}
									title={item.name_Game}
									imgsrc={item.image}
								/>
							))}
						</SideBanner>
						<GameSection isScroll={true} title="Top Seller">
							{topsaler.map((item) => (
								<GameCard
									key={item.id}
									id={item.id}
									title={item.name_Game}
									price={item.price}
									discount={item.discount}
									imgsrc={item.image}
								/>
							))}
						</GameSection>

						<GameSection title="action" viewMore>
							{action.map((item) => (
								<GameCard
									id={item.id}
									key={item.id}
									title={item.name_Game}
									price={item.price}
									discount={item.discount}
									size="6:4"
									imgsrc={item.image}
									color="black"
									description={item.description}
								/>
							))}
						</GameSection>

						<GameSection title="simulation" viewMore size={4}>
							{simulation.map((item) => (
								<GameThumb
									showPrice={true}
									price={item.price}
									discount={item.discount}
									imgsrc={item.image}
									id={item.id}
									key={item.id}
									title={item.name_Game}
								/>
							))}
						</GameSection>
						<GameSection title="adventure" viewMore size={4}>
							{adventure.map((item) => (
								<GameThumb
									showPrice={true}
									price={item.price}
									discount={item.discount}
									imgsrc={item.image}
									id={item.id}
									key={item.id}
									title={item.name_Game}
								/>
							))}
						</GameSection>
						<GameSection title="strategy" viewMore size={4}>
							{strategy.map((item) => (
								<GameThumb
									showPrice={true}
									price={item.price}
									discount={item.discount}
									imgsrc={item.image}
									id={item.id}
									key={item.id}
									title={item.name_Game}
								/>
							))}
						</GameSection>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
