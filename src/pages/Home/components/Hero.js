import React from "react";
import { Link } from "react-router-dom";
import heroStyles from "./Hero.module.css";
import img from "../../../assets/vid1.png";

export const Hero = () => {
	const {
		hero,
		container,
		left,
		right,
		title,
		text,
		videoContainer,
		video,
		btnContainer,
		textVideo,
	} = heroStyles;
	return (
		<section className={hero}>
			<div className={container}>
				<div className={left}>
					<h2 className={title}>Simple Contracts on Blockchain</h2>
					<p className={text}>
						Do you want to lend your friend a book? Maybe a car? Sign-off a very
						simple contracts on blockchain. You will secure the value of the
						book or a car in case he will not return it.
					</p>
					<div className={btnContainer}>
						<a
							className="btn btn-solid"
							href="https://invis.io/GK10TG16NXD6"
							target="_blank"
							rel="noreferrer"
						>
							launch demo
						</a>
						<Link className="btn btn-outline" to="/white-paper">
							white paper
						</Link>
					</div>
				</div>
				<div className={right}>
					<div className={videoContainer}>
						<img
							className={video}
							src={img}
							alt="EscrowX - Simple Contracts on Blockchain"
						/>
					</div>
					<p className={textVideo}>Watch 1 Minute video on what is EscrowX</p>
				</div>
			</div>
		</section>
	);
};
