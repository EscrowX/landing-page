import React from "react";
import inputStyles from "./Input.module.css";

export const Input = ({ label, name, onChange, isTextArea }) => {
	const { inputContainer, labelStyle, inputStyle, textareaStyle } = inputStyles;
	if (isTextArea) {
		return (
			<div className={inputContainer}>
				<label className={labelStyle} htmlFor={name}>
					{label}
				</label>
				<textarea
					onChange={onChange}
					className={textareaStyle}
					name={name}
					id={name}
				/>
			</div>
		);
	}
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
