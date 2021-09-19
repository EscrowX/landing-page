import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import layoutStyles from "./Layout.module.css";

export const Layout = ({ children }) => {
	const { layout } = layoutStyles;
	return (
		<div className={layout}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};
