import React from "react";
import "./EventEntry.css";

function EventEntry(props) {
    const { name, date } = props;

    return (
        <div>
            <li className="list-group-item">
                <div className="text-left">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>{name}</p>
                        </div>
                        <div className="col-lg-4">
                            <p>{date}</p>
                        </div>
                        <div className="col-lg-2 text-center">
                            <p>num</p>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default EventEntry;
