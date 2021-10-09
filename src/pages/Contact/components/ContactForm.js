import React, { useState } from "react";
import contactFormStyles from "./ContactForm.module.css";
import { Input } from "../../WhitePaper/components/Input";
import { Button } from "../../../lib/components";

export const ContactForm = () => {
	const { container, title, form } = contactFormStyles;
	const [formFields, setformFields] = useState({ email: "", message: "" });
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setformFields({ ...formFields, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (formFields.email && formFields.message) {
			console.log(formFields);
		}
	};

	return (
		<div className={container}>
			<form className={form} onSubmit={handleSubmit}>
				<h2 className={title}>Send us Message</h2>
				<Input
					label="Your email address:"
					name="email"
					onChange={handleChange}
				/>
				<Input
					label="Your message:"
					name="message"
					onChange={handleChange}
					isTextArea
				/>
				<Button
					isSolid
					onClick={(e) => handleSubmit(e)}
					text="Submit"
					type="submit"
				/>
			</form>
		</div>
	);
};
