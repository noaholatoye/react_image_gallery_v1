import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Config from "./components/Config";
import Container from "./components/Container";
import SearchForm from "./components/SearchForm";

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
	performSearch = (query = "cats") => {
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
		console.log(this.state.photos);
		return (
			<div className="container">
				<SearchForm onSearch={this.performSearch} />
				{this.state.loading ? (
					<p>Loading...</p>
				) : (
					<Container data={this.state.photos} />
				)}
			</div>
		);
	}
}
export default App;
