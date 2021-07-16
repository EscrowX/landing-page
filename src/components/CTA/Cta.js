import React from "react";
import ctaStyles from "./Cta.module.css";

function Cta() {
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
					<a className="btn btn-solid" href="#">
						contact us
					</a>
					<a className="btn btn-outline" href="#">
						read deck
					</a>
				</div>
			</div>
		</section>
	);
}

export default Cta;
