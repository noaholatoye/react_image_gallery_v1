import React from "react";
import ListPhotos from "./ListPhotos";
import NoPhotos from "./NoPhotos";
const PhotoContainer = props => {
	// Import the data fetched
	const results = props.data;
	let photos;
	if (results.length > 0) {
		photos = results.map(pic => (
			<ListPhotos
				title={pic.title}
				key={pic.id}
				url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${
					pic.id
				}_${pic.secret}_m.jpg`}
			/>
		));
	} else {
		photos = <NoPhotos />;
	}

	return (
		<div className="photo-container">
			<h2>Results</h2>
			<ul>{photos}</ul>
		</div>
	);
};

export default PhotoContainer;
