import React from "react";
import { ContactForm, Info } from "./components";
import contactStyles from "./Contact.module.css";

export const Contact = () => {
	const { section, container } = contactStyles;
	return (
		<section className={section}>
			<div className={container}>
				<ContactForm />
				<Info />
			</div>
		</section>
	);
};
