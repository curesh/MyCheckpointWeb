import React from "react";
import "./makeCheckForItem.css";
import ItemEntry from "./ItemEntry/ItemEntry";

function makecheck(props){
    const {present} = props;
    var presentState;
    if(present == 0) {
        presentState = "empty circle";
    }
    else if(present == 1){
        presentState = "circle with check";
    }
    else{
        presentState = null;
    }
    var drawingOfCircle;
    return (
        presentState
    );
}

export default ItemEntry;