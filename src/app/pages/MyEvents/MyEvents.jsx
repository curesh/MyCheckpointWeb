import React, { useState, useEffect } from "react";
import EventEntry from "../../components/EventEntry/EventEntry";
import "./MyEvents.css";
function MyEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents([
            { name: "Event", date: "lorem", category: "Week", id: "1" },
            { name: "Event", date: "lorem", category: "Today", id: "2" },
            { name: "Event", date: "lorem", category: "Month", id: "3" },
            { name: "Event", date: "lorem", category: "Today", id: "4" },
            { name: "Event", date: "lorem", category: "Week", id: "5" }
        ]);
    }, []);

    const todayEvents = events.map(event => {
        if (event.category === "Today") {
            return <EventEntry name={event.name} date={event.date} />;
        } else {
            return null;
        }
    });

    const weekEvents = events.map(event => {
        if (event.category === "Week") {
            return <EventEntry name={event.name} date={event.date} />;
        } else {
            return null;
        }
    });

    const monthEvents = events.map(event => {
        if (event.category === "Month") {
            return <EventEntry name={event.name} date={event.date} />;
        } else {
            return null;
        }
    });
    return (
        <div className="container">
            <ul className="list-group col-lg-12">
                <h1 className="text-left list-group-item col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Today</h1>
                        </div>
                        <div className="col-lg-4">
                            <h1>Date</h1>
                        </div>
                        <div className="col-lg-2">
                            <h1>#/total</h1>
                        </div>
                    </div>
                </h1>
                {todayEvents}
            </ul>
            <ul className="list-group col-lg-12">
                <h1 className="text-left list-group-item col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Today</h1>
                        </div>
                        <div className="col-lg-4">
                            <h1>Date</h1>
                        </div>
                        <div className="col-lg-2">
                            <h1>#/total</h1>
                        </div>
                    </div>
                </h1>
                {weekEvents}
            </ul>
            <ul className="list-group col-lg-12">
                <h1 className="text-left list-group-item col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Today</h1>
                        </div>
                        <div className="col-lg-4">
                            <h1>Date</h1>
                        </div>
                        <div className="col-lg-2">
                            <h1>#/total</h1>
                        </div>
                    </div>
                </h1>
                {monthEvents}
            </ul>
        </div>
    );
}

export default MyEvents;
