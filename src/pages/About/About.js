import React from "react";
import { Cta } from "../../lib/components";
import aboutStyles from "./About.module.css";
import { teamMembers } from "../../lib/data";
import { TeamMemberCard } from "./components";

export const About = () => {
	const { section, container, title, cardsContainer } = aboutStyles;

	return (
		<>
			<section className={section}>
				<div className={container}>
					<h2 className={title}>Our Team</h2>
					<div className={cardsContainer}>
						{teamMembers.map((member) => (
							<TeamMemberCard key={member.id} {...member} />
						))}
					</div>
				</div>
			</section>
			<Cta />
		</>
	);
};
