import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "./lib/components";
import { About, Error, Token, Home } from "./pages";

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/token">
						<Token />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="*">
						<Error />
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
