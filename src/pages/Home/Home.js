import React from "react";
import { Hero, Step } from "./components";
import { Cta } from "../../lib/components";
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