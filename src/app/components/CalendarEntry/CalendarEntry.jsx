import React from "react";
import "./CalendarEntry.css";
//import makeCheckForItem from "../makeCheckForItem/makeCheckForItem";

function CalendarEntry(props) {
    /*should be const?*/

    var { name, calNum, present, updateCalendar, deleteCalendar } = props;

    return (
        <div>
            <div className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-success">
                        <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                        />
                    </div>
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                    value={name}
                    onChange={event =>
                        updateCalendar(calNum, event.target.value)
                    }
                />
                <div className="input-group-append">
                    <button
                        id={calNum}
                        onClick={event => deleteCalendar(event.target.id)}
                        className="btn btn-danger"
                    >
                        x
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CalendarEntry;
