import React from "react";
import inputStyles from "./Input.module.css";

export const Input = ({ label, name, onChange }) => {
	const { inputContainer, labelStyle, inputStyle } = inputStyles;
	return (
		<div className={inputContainer}>
			<label className={labelStyle} htmlFor={name}>
				{label}
			</label>
			<input
				onChange={onChange}
				className={inputStyle}
				type="text"
				name={name}
				id={name}
			/>
		</div>
	);
};
