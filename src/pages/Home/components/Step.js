import React from "react";
import StepStyles from "./Step.module.css";

export const Step = ({ index, title, img, desc }) => {
	const {
		section,
		container,
		textContainer,
		imageContainer,
		imgPlaceholder,
		image,
		titleSection,
		text,
		reverseOrder,
	} = StepStyles;
	return (
		<section className={section}>
			<div className={container}>
				<div
					className={
						index % 2 !== 0
							? `${imageContainer} ${reverseOrder}`
							: imageContainer
					}
				>
					<div className={imgPlaceholder}>
						<img className={image} src={img} alt="" />
					</div>
				</div>
				<div className={textContainer}>
					<h2 className={titleSection}>{`${index + 1}/ ${title}`}</h2>
					<p className={text}>{desc}</p>
				</div>
			</div>
		</section>
	);
};
