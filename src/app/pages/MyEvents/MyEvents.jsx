import React, { useState, useEffect } from "react";
import EventEntry from "../../components/EventEntry/EventEntry";

function MyEvents() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		setEvents([
			{ name: "Event1", desc: "lorem ipsum" },
			{ name: "Event2", desc: "lorem" },
		]);
	}, []);

	const e = events.map((event) => {
		return <EventEntry name={event.name} desc={event.desc} />;
	});
	return (
		<div>
			<h1>Events</h1>
			{e}
		</div>
	);
}

export default MyEvents;
