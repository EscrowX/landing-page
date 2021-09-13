import React from "react";
import { Hero, Step, Cta } from "./components";
import { steps } from "../../lib/data";

export const Home = () => {
	return (
		<>
			<Hero />
			{steps.map((step, index) => {
				return <Step key={step.id} index={index} {...step} />;
			})}
			<Cta />
		</>
	);
};
