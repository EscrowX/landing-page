import React from "react";
import Hero from "../components/Hero/Hero";
import Step from "../components/Step/Step";
import Cta from "../components/CTA/Cta";
import data from "../data";

const Home = () => {
	return (
		<>
			<Hero />
			{data.map((step, index) => {
				return <Step key={step.id} index={index} {...step} />;
			})}
			<Cta />
		</>
	);
};

export default Home;
