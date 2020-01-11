import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import ItemEntry from '../../components/ItemEntry/ItemEntry';
import GetInputForNewItem from '../../components/GetInputForNewItem/GetInputForNewItem'

function EventItems(props) {
    let m_eventName = "Sbhacks event";
    let m_date = 12262004;
    let m_dateString = m_date + " ";
    m_dateString =
        m_dateString.slice(0, 2) +
        "/" +
        m_dateString.slice(2, 4) +
        "/" +
        m_dateString.slice(4);
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
                <h3>Date</h3>
                <div className="card-body">
                    {i}
                    <div>
                        <a
                            className="btn btn-large btn-success"
                            onClick={addItem}
                        >
                            Add Item
                        </a>
                    </div>
                </div>
            </div>

			
		</div>
		
			
	);
}

export default EventItems;
