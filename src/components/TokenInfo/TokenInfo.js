import React from "react";
import tokenInfoStyles from "./TokenInfo.module.css";

const TokenInfo = () => {
	const { section, container, title, TBAsection, TBAtext } = tokenInfoStyles;
	return (
		<section className={section}>
			<div className={container}>
				<h2 className={title}>Token</h2>
				<div className={TBAsection}>
					<p className={TBAtext}>To be announced. Details coming soon</p>
				</div>
			</div>
		</section>
	);
};

export default TokenInfo;
