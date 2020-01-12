import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ItemEntry from "../../components/ItemEntry/ItemEntry";
import GetInputForNewItem from "../../components/GetInputForNewItem/GetInputForNewItem";

function EventItems(props) {
    let m_eventName = "Sbhacks event";
    var date = new Date();
    var dateString =
        (date.getMonth() + 1).toString() + "/" + date.getDate().toString();
    console.log(dateString);
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems([
            { itemName: "yerba", itemNum: 1, present: 1 },
            { itemName: "mate", itemNum: 2, present: 0 }
        ]);
    }, []);
    const deleteItem = id => {
        setItems(prev => {
            return prev.filter(item => item.itemNum != id);
        });
    };
    const addItem = () => {
        setItems(prev => {
            return [
                ...prev,
                {
                    itemName: "",
                    itemNum:
                        prev.length === 0
                            ? 0
                            : prev[prev.length - 1].itemNum + 1,
                    present: false
                }
            ];
        });
    };
    const updateItem = (id, value) => {
        setItems(prev => {
            const result = prev.map(el => {
                if (el.itemNum == id) {
                    el.itemName = value;
                }
                return el;
            });
            return result;
        });
    };
    const i = items.map(item => {
        return (
            <ItemEntry
                itemName={item.itemName}
                itemNum={item.itemNum}
                present={item.present}
                updateItem={updateItem}
                deleteItem={deleteItem}
                key={item.itemNum}
            />
        );
    });
    return (
        <div>
            <div className="card">
                <h1>Event Items</h1>
                <h3>{dateString}</h3>
                <div className="card-body">
                    {i}
                    <div>
                        <a
                            className="btn btn-large btn-primary text-white"
                            onClick={addItem}
                        >
                            Add Item
                        </a>
                    </div>
                </div>
            </div>
            <Link className="btn btn-lg btn-info m-5" to="/myevents">
                Back
            </Link>
        </div>
    );
}

export default EventItems;
