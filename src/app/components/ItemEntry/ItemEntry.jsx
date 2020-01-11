import React from "react";
import "./ItemEntry.css";
import makeCheckForItem from "../makeCheckForItem/makeCheckForItem";

function ItemEntry(props) {
    /*should be const?*/

    var { itemName, itemNum, present, updateItem, deleteItem } = props;
    //present = 1;
    let askForData = false;
    if (itemName == "") {
        askForData = true;
    }
    const askForDataFunc = () => {
        if (askForData) {
        }
    };
    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
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
                    value={itemName}
                    onChange={event => updateItem(itemNum, event.target.value)}
                />
                <div className="input-group-append">
                    <button
                        id={itemNum}
                        onClick={event => deleteItem(event.target.id)}
                        className="btn btn-primary"
                    >
                        x
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemEntry;
