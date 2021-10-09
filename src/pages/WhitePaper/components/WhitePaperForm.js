import React, { useState } from "react";
import { Button } from "../../../lib/components/Button";
import { Input } from "./Input";
import whitePaperFormStyles from "./WhitePaperForm.module.css";

export const WhitePaperForm = () => {
	const { container, form, description } = whitePaperFormStyles;
	const [formFields, setformFields] = useState({ email: "", fullName: "" });
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setformFields({ ...formFields, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (formFields.email && formFields.fullName) {
			console.log(formFields);
		}
	};

	return (
		<div className={container}>
			<form className={form} onSubmit={handleSubmit}>
				<p className={description}>
					Drop us your name and email address and we will send you the latest
					WhitePaper
				</p>
				<Input
					onChange={handleChange}
					name="email"
					label="Your email address:"
				/>
				<Input
					onChange={handleChange}
					name="fullName"
					label="Your Name:"
				/>
				<Button
					onClick={(e) => handleSubmit(e)}
					text="Request Investor Deck"
					type="submit"
				/>
			</form>
		</div>
	);
};
