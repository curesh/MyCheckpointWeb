import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemEntry from "../../components/ItemEntry/ItemEntry";
import "./EventItems.css";

function EventItems(props) {
    const { id } = props.match.params.id;
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems([
            { itemName: "yerba", itemNum: 1, present: 1 },
            { itemName: "mate", itemNum: 2, present: 0 }
        ]);
    }, []);
    const i = items.map(item => {
        return (
            <ItemEntry
                itemName={item.itemName}
                itemNum={item.itemNum}
                present={item.present}
            />
        );
    });
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h1>Event Name</h1>
                    <h4>Date</h4>
                </div>
                <div className="card-body">{i}</div>
            </div>
            <Link to="/myevents">Back</Link>
        </div>
    );
}

export default EventItems;
