import React, { useState, useEffect } from "react";
//import "./MyCalendars.css";
import { Link } from "react-router-dom";
import CalendarEntry from '../../components/CalendarEntry/CalendarEntry';

function MyCalendars(props) {

	const [calendars, setCalendars] = useState([]);
	useEffect(() => {
        setCalendars([
            { name: "UclaEventsCal", calNum: 1, present: 1 },
            { name: "JobEventsCal", calNum: 2, present: 0 }
        ]);
	}, []);
	const deleteCalendar = id => {
        setCalendars(prev => {
            return prev.filter(calendar => calendar.calNum != id);
        });
    };
    const addCalendar = () => {
        setCalendars(prev => {
            return [
                ...prev,
                {
                    calendarName: "",
                    calNum:
                        prev.length === 0
                            ? 0
                            : prev[prev.length - 1].calNum + 1,
                    present: false
                }
            ];
        });
    };
    const updateCalendar = (id, value) => {
        setCalendars(prev => {
            const result = prev.map(el => {
                if (el.calNum == id) {
                    el.name = value;
                }
                return el;
            });
            return result;
        });
	};
	const i = calendars.map(calendar => {
        return (
            <CalendarEntry
                name={calendar.name}
                calNum={calendar.calNum}
                present={calendar.present}
                updateCalendar={updateCalendar}
                deleteCalendar={deleteCalendar}
                key={calendar.calNum}
            />
        );
    });
	return (
        <div>
            <div className="card">
                <h1>My Calendars</h1>
                <div className="card-body">
                    {i}
                    <div>
                        <a
                            className="btn btn-large btn-success"
                            onClick={addCalendar}
                        >
                            Add Calendar
                        </a>
                    </div>
                </div>
            </div>
            <Link to = "/myevents">Go To Events Section</Link>

			
		</div>
		
			
	);
}

export default MyCalendars;
