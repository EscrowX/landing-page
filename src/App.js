import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Token from "./pages/Token";
import Error from "./pages/Error";

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/token">
						<Token />
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
