import React from "react";

const ListPhotos = props => (
	<li>
		<img src={props.url} alt={props.title} />
	</li>
);

export default ListPhotos;
