import React from "react";
import "./ItemEntry.css";
import makeCheckForItem from "../makeCheckForItem/makeCheckForItem";

function ItemEntry(props) {
    /*should be const?*/

    var { itemName, itemNum, present } = props;
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
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                        />
                    </div>
                </div>
                <input
                    type="text"
                    class="form-control"
                    aria-describedby="basic-addon1"
                />
                <div className="input-group-append">
                    <button className="btn btn-primary">x</button>
                </div>
            </div>
        </div>
    );
}

export default ItemEntry;
