import React from "react";
import buttonStyles from "./Button.module.css";

export const Button = ({ isSolid, text, type, onClick }) => {
	const { btn, solid, outline } = buttonStyles;
	return (
		<button
			onClick={onClick}
			type={type}
			className={`${btn} ${isSolid ? solid : outline}`}
		>
			{text}
		</button>
	);
};
