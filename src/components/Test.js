import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Config from "./components/Config";
import Container from "./components/Container";
import SearchForm from "./components/SearchForm";
import Navigation from "./components/Navigation";

// Rout Path
// const Cats;
// const Dogs;
// const Computers;
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			loading: true
		};
	}

	// Rout Path
	// Cats = performSearch("cats");
	// Dogs = performSearch("Dogs");
	// Computers = performSearch("computers");

	// Fetch data with Axios
	// componentDidMount(Navigation) {
	// 	this.performSearch(Navigation);
	// }

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
		return (
			<BrowserRouter>
				<div className="container">
					<SearchForm onSearch={this.performSearch} />
					<Navigation />

					{/* <Switch>
						<Route path="/cats" component={Cats)} />
						<Route path="/dogs" component={Dogs} />
						<Route
							path="/computers"
							component={Computers}
						/>
					</Switch> */}
					{this.state.loading ? (
						<p>Loading...</p>
					) : (
						<Container data={this.state.photos} />
					)}
				</div>
			</BrowserRouter>
		);
	}
}
export default App;

// const PhotoContainer = props => {
// 	// Import the data fetched
// 	const results = props.data;
// 	let photos;
// 	if (results.length > 0) {
// 		photos = results.map(pic => (
// 			<ListPhotos
// 				title={pic.title}
// 				key={pic.id}
// 				url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${
// 					pic.id
// 				}_${pic.secret}_m.jpg`}
// 			/>
// 		));
// 	} else {
// 		photos = <NoPhotos />;
// 	}

// 	return (
// 		<div className="photo-container">
// 			<h2>Results</h2>
// 			<ul>{photos}</ul>
// 		</div>
// 	);
// };
