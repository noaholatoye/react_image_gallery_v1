import React from "react";

import PhotoContainer from "./PhotoContainer";

const Container = props => {
	return (
		<div className="container">
			<PhotoContainer data={props.data} />
		</div>
	);
};

export default Container;
