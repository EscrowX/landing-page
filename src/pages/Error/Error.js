import React from "react";
import errorStyles from "./Error.module.css";

export const Error = () => {
	const { section, container, title } = errorStyles;

	return (
		<section className={section}>
			<div className={container}>
				<h2 className={title}>Opps... page not found</h2>
			</div>
		</section>
	);
};
