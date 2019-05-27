import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./css/App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ""
		};
	}

	componentDidMount() {
		fetch("http://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		return !robots.length ? (
			<h1 className='tc'>Loading</h1>
		) : (
			<div className='container'>
				<h1>ROBOFAMILY</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;