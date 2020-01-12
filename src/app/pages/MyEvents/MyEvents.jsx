import React, { useState, useEffect } from "react";
import EventEntry from "../../components/EventEntry/EventEntry";
import "./MyEvents.css";
import { Link } from "react-router-dom";
function MyEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents([
            {
                name: "Event",
                date: "lorem",
                category: "Week",
                id: "1",
                color: "#e4ffa1"
            },
            {
                name: "Event",
                date: "lorem",
                category: "Today",
                id: "2",
                color: "#ff8d5c"
            },
            {
                name: "Event",
                date: "lorem",
                category: "Month",
                id: "3",
                color: "#8437a1"
            },
            {
                name: "Event",
                date: "lorem",
                category: "Today",
                id: "4",
                color: "#62a5d1"
            },
            {
                name: "Event",
                date: "lorem",
                category: "Week",
                id: "5",
                color: "#ebb9d4"
            }
        ]);
    }, []);

    const todayEvents = events.map(event => {
        if (event.category === "Today") {
            return (
                <EventEntry
                    name={event.name}
                    date={event.date}
                    id={event.id}
                    key={event.id}
                    color={event.color}
                />
            );
        } else {
            return null;
        }
    });

    const weekEvents = events.map(event => {
        if (event.category === "Week") {
            return (
                <EventEntry
                    name={event.name}
                    date={event.date}
                    id={event.id}
                    key={event.id}
                    color={event.color}
                />
            );
        } else {
            return null;
        }
    });

    const monthEvents = events.map(event => {
        if (event.category === "Month") {
            return (
                <EventEntry
                    name={event.name}
                    date={event.date}
                    id={event.id}
                    key={event.id}
                    color={event.color}
                />
            );
        } else {
            return null;
        }
    });
    return (
        <div>
            <ul className="list-group p-3">
                <h1 className="text-left">My Events</h1>
            </ul>
            <ul className="list-group col-sm-12">
                <h3 className="text-left list-group-item bg-primary text-white">
                    <div className="row">
                        <div className="col-lg-6 col-5">
                            <h4>Today</h4>
                        </div>
                        <div className="col-lg-4 col-4">
                            <h4>Date</h4>
                        </div>
                        <div className="col-lg-2 col-3">
                            <h4 className="text-right">#/total</h4>
                        </div>
                    </div>
                </h3>
                {todayEvents}
            </ul>
            <ul className="list-group col-lg-12">
                <h3 className="text-left list-group-item bg-primary text-white">
                    <div className="row">
                        <div className="col-lg-6 col-5">
                            <h4>This Week</h4>
                        </div>
                        <div className="col-lg-4 col-4">
                            <h4>Date</h4>
                        </div>
                        <div className="col-lg-2 col-3">
                            <h4 className="text-right">#/total</h4>
                        </div>
                    </div>
                </h3>
                {weekEvents}
            </ul>
            <ul className="list-group col-lg-12">
                <h3 className="text-left list-group-item bg-primary text-white">
                    <div className="row">
                        <div className="col-lg-6 col-5">
                            <h4>This Month</h4>
                        </div>
                        <div className="col-lg-4 col-4">
                            <h4>Date</h4>
                        </div>
                        <div className="col-lg-2 col-3">
                            <h4 className="text-right">#/total</h4>
                        </div>
                    </div>
                </h3>
                {monthEvents}
            </ul>
            <Link className="btn btn-lg btn-info" to="/myCalendars">
                Go back to calendars section
            </Link>
        </div>
    );
}

export default MyEvents;
