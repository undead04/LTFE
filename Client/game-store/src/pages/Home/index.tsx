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
		// const fetchData = async () => {
		// 	const response = await fetch("http://localhost:8000/api/home");
		// 	const data = await response.json();
		// 	document.title = data.title;
		// };
		// fetchData();
		loadData();
		// console.log("Call API");
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
							{/* <GameThumb
								id={1}
								title="FE ESPORT TM 2023"
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameThumb
								id={2}
								title="FE ESPORT TM 2023"
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameThumb
								id={3}
								title="FE ESPORT TM 2023"
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameThumb
								id={1}
								title="FE ESPORT TM 2023"
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameThumb
								id={2}
								title="FE ESPORT TM 2023"
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/> */}
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
							{/* <GameCard
								id={3}
								title="Game EA ESPORT VN 2023"
								price={0}
								discount={10}
								size="6:4"
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								color="black"
								description="EA SPORTS FC™ 24 welcomes you to The World’s Game: the
								most true-to-football experience ever with
								HyperMotionV, PlayStyles optimised by Opta, and a
								revolutionised Frostbite™ Engine."
							/>
							<GameCard
								id={3}
								title="Game EA ESPORT VN 2023"
								price={10000}
								discount={10}
								size="6:4"
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								color="black"
								description="EA SPORTS FC™ 24 welcomes you to The World’s Game: the
								most true-to-football experience eve"
							/> */}
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
							{/* <GameThumb
								showPrice={true}
								price={10000}
								discount={10}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								id={1}
								title="EA ESPORT CHAMPION"
							/>
							<GameThumb
								showPrice={true}
								price={10000}
								discount={0}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								id={1}
								title="EA ESPORT CHAMPION"
							/> */}
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
							{/* <GameThumb
								showPrice={true}
								price={0}
								discount={10}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								id={1}
								title="EA ESPORT CHAMPION"
							/> */}
						</GameSection>
						<GameSection title="strategy" viewMore size={4}>
							{/* <GameThumb
								showPrice={true}
								price={10000}
								discount={10}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								id={1}
								title="EA ESPORT CHAMPION"
							/> */}

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
