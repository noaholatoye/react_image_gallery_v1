import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Config from "./components/Config";
import Container from "./components/Container";
import SearchForm from "./components/SearchForm";
import Navigation from "./components/Navigation";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			loading: true,
			searchText: ""
		};
	}
	onSearchChange = e => {
		this.setState({ searchText: e.target.value });
	};

	// Fetch data with Axios
	// componentDidMount() {
	// 	this.performSearch();
	// }

	// Fetch data with Axios
	performSearch = query => {
		axios
			.get(
				`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Config}&tags=${query}&per_page=12&format=json&nojsoncallback=1`
			)
			.then(response => {
				this.setState({
					photos: response.data.photos.photo,
					loading: false
				});
			})
			.catch(error => {
				console.log("Error fetching and parsing data", error);
			});
	};
	render() {
		// console.log(this.state.searchText);
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<SearchForm
							onSearch={this.performSearch}
							onSearchChange={this.onSearchChange}
						/>
						<Navigation data={this.performSearch} />
						<Switch>
							<Route
								exact
								path="/"
								component={() =>
									this.state.loading ? (
										<p>Loading...</p>
									) : (
										<Container data={this.state.photos} />
									)
								}
							/>
							<Route
								path="/cats"
								render={() => (
									<Container
										data={this.state.photos}
										loading={this.state.loading}
										onLoad={this.performSearch("cats")}
									/>
								)}
							/>
							<Route
								path="/dogs"
								render={() => (
									<Container
										data={this.state.photos}
										loading={this.state.loading}
										onLoad={this.performSearch("dogs")}
									/>
								)}
							/>
							<Route
								path="/computers"
								render={() => (
									<Container
										data={this.state.photos}
										onLoad={this.performSearch("computers")}
									/>
								)}
							/>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
