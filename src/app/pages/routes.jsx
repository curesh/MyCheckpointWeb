import React from "react";
import { Switch, Route } from "react-router-dom";
import MyEvents from "./MyEvents/MyEvents";
import EventItems from "./EventItems/EventItems";

function Routes() {
	return (
		<Switch>
			<Route exact path="/myevents" component={MyEvents} />
			<Route path="/myevents/event" component={EventItems} />
		</Switch>
	);
}

export default Routes;
