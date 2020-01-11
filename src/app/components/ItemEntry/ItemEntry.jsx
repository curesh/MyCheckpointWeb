import React from "react";
import "./ItemEntry.css";
//import makeCheckForItem from "../makeCheckForItem/makeCheckForItem";

function ItemEntry(props) {
    //present = 1;

    return (
        <div>
            <div className="container">
                <div class="card">
                    <div class="card-body">
                        <div class="form-check text-left">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck1"
                            />
                            <label class="form-check-label" for="defaultCheck1">
                                Default checkbox
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemEntry;
