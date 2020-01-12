import React from "react";
import { Switch, Route } from "react-router-dom";
import MyEvents from "./MyEvents/MyEvents";
import EventItems from "./EventItems/EventItems";
import SignIn from "./SignIn/SignIn";
import MyCalendars from "./MyCalendars/MyCalendars";

function Routes() {
    return (
        <Switch>
            <Route exact path="/myevents" component={MyEvents} />
            <Route path="/myevents/event/:id" component={EventItems} />
            <Route path="/signin" component={SignIn} />
            <Route path="/myCalendars" component={MyCalendars} />
        </Switch>
    );
}

export default Routes;
