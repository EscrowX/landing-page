import React from "react";
import { Link } from "react-router-dom";
import ctaStyles from "./Cta.module.css";

export const Cta = () => {
	const { section, container, title, text, btnContainer } = ctaStyles;
	return (
		<section className={section}>
			<div className={container}>
				<h2 className={title}>Interested in investing in?</h2>
				<p className={text}>
					We are validating the idea. We are looking for investors willing to
					work with us. If you are interested in, don’t hesitate to contact us.
				</p>

				<div className={btnContainer}>
					<Link className="btn btn-solid" to="/contact">
						contact us
					</Link>
					<Link className="btn btn-outline" to="/white-paper">
						read deck
					</Link>
				</div>
			</div>
		</section>
	);
};