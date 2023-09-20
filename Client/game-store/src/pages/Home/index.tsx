import * as React from "react";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import Banner from "../../components/Banner";
import SideBanner from "../../components/SideBanner";
import GameThumb from "./../../components/GameThumb/index";
import GameSection from "../../containers/GameSection";
import GameCard from "../../components/GameCard";

const Home = () => {
	return (
		<>
			<section className="bg-black">
				<div className="container-md">
					<div className={clsx("row align-content center")}>
						<Banner />
						<SideBanner>
							<GameThumb
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
							/>
							<GameThumb
								id={3}
								title="FE ESPORT TM 2023"
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
						</SideBanner>
						<GameSection isScroll={true} title="Game on Sale">
							<GameCard
								id={1}
								title="Game EA ESPORT VN 2023"
								price={10000}
								discount={10}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameCard
								id={2}
								title="Game EA ESPORT VN 2023"
								price={0}
								discount={10}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameCard
								id={3}
								title="Game EA ESPORT VN 2023"
								price={10000}
								discount={0}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameCard
								id={1}
								title="Game EA ESPORT VN 2023"
								price={10000}
								discount={10}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameCard
								id={2}
								title="Game EA ESPORT VN 2023"
								price={0}
								discount={10}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameCard
								id={3}
								title="Game EA ESPORT VN 2023"
								price={10000}
								discount={0}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameCard
								id={1}
								title="Game EA ESPORT VN 2023"
								price={10000}
								discount={10}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameCard
								id={2}
								title="Game EA ESPORT VN 2023"
								price={0}
								discount={10}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
							<GameCard
								id={3}
								title="Game EA ESPORT VN 2023"
								price={10000}
								discount={0}
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
							/>
						</GameSection>

						<GameSection title="Action" viewMore>
							<GameCard
								id={3}
								title="Game EA ESPORT VN 2023"
								price={10000}
								discount={0}
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
								discount={0}
								size="6:4"
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								color="black"
								description="EA SPORTS FC™ 24 welcomes you to The World’s Game: the
								most true-to-football experience eve"
							/>
							<GameCard
								id={3}
								title="Game EA ESPORT VN 2023"
								price={10000}
								discount={0}
								size="6:4"
								imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								color="black"
								description="EA SPORTS FC™ 24 welcomes you to The World’s Game: the
								most true-to-football experience ever with
								HyperMotionV, PlayStyles optimised by Opta, and a
								revolutionised Frostbite™ Engine."
							/>
						</GameSection>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
