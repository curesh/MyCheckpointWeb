import React from "react";
import "./EventEntry.css";

function EventEntry(props) {
	const { name, desc } = props;

	return (
		<div>
			<h1>{name}</h1>
			<p>{desc}</p>
		</div>
	);
}

export default EventEntry;
