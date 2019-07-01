import React, { Component } from "react";
import axios from "axios";
// import { Route } from "react-router-dom";
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
			loading: true
		};
	}
	// Fetch data with Axios
	componentDidMount() {
		this.performSearch();
	}

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
		return (
			<div className="container">
				<SearchForm onSearch={this.performSearch} />
				<Navigation data={this.performSearch} />
				<div>
					{this.state.loading ? (
						<p>Loading...</p>
					) : (
						<Container data={this.state.photos} />
					)}
				</div>

				{/* <Route exact path="cats" component={this.performSearch("cats")} />

				<Route path="dogs" component={this.performSearch("dogs")} />
				<Route
					exact
					path="computers"
					component={this.performSearch("computers")}
				/> */}
			</div>
		);
	}
}
export default App;
