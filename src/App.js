import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Step from "./components/Step/Step";
import Cta from "./components/CTA/Cta";
import data from "./data";

function App() {
	return (
		<Layout>
			<Hero />
			{data.map((step, index) => {
				return <Step key={step.id} index={index} {...step} />;
			})}
			<Cta />
		</Layout>
	);
}

export default App;
