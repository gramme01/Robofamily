import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./css/App.css";

import { setSearchField, requestingRobots } from "../actions";

const mapStatetoProps = state => ({
	searchField: state.searchRobots.searchField,
	robots: state.requestRobots.robots,
	isPending: state.requestRobots.isPending,
	error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
	onSearchChange: event => dispatch(setSearchField(event.target.value)),
	onRequestRobots: () => dispatch(requestingRobots())
});

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { robots, searchField, onSearchChange, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return isPending ? (
			<h1 className='tc'>Loading</h1>
		) : (
			<div className='container'>
				<h1>ROBOFAMILY</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(App);
