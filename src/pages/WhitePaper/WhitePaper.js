import React from "react";
import whitePaperImg from "../../assets/whitepaper.png";
import { WhitePaperForm } from "./components/WhitePaperForm";
import whitePaperStyles from "./WhitePaper.module.css";

export const WhitePaper = () => {
	const { section, container, imgContainer, img } = whitePaperStyles;
	return (
		<section className={section}>
			<div className={container}>
				<div className={imgContainer}>
					<img className={img} src={whitePaperImg} alt="" />
				</div>
				<WhitePaperForm />
			</div>
		</section>
	);
};
