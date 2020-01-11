import React from "react";
import "./ItemEntry.css";
import makeCheckForItem from "../makeCheckForItem/makeCheckForItem";

function ItemEntry(props) {
	/*should be const?*/ 
	var {itemName, itemNum, present, deleteItem} = props;
	//present = 1;
	/*
	let askForData = false;
	if(itemName == ""){
		askForData = true;
	}
	const askForDataFunc = () => {
		if(askForData){

		}
	}
	*/
	return (
		<div>
			
			<input type = "checkbox" ></input>
			<input type="text" name = {itemName} placeholder = {itemName}/>
			<a className = "btn btn-large btn-success" onClick = {() => deleteItem(itemNum)}>x</a>
			
		</div>
	);
}

export default ItemEntry;
