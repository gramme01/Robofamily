import React from "react";

const Scroll = props => {
	return (
		<div
			style={{
				overflowY: "scroll",
				borderTop: "solid .5vw #ebfc7c",
				height: "28vw"
			}}
		>
			{props.children}
		</div>
	);
};

export default Scroll;
