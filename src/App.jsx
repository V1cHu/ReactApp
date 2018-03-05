import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';
import Home from './components/Home';

class App extends React.Component {

	constructor() {
		super();
	}


	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-dark bg-dark">
					<div className="container">
						<a className="navbar-brand" href="/">Todo List</a>
					</div>
				</nav>
				<div className="container" id="content">
					<Switch>
						<Route path="/login" component={Login} />
						<PrivateRoute path="/" component={Home} />
					</Switch>
				</div>
			</div>
		);
	}

}

export default App;