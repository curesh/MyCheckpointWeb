import React from "react";
import "./ItemEntry.css";
import makeCheckForItem from "../makeCheckForItem/makeCheckForItem";

function ItemEntry(props) {
	/*should be const?*/ 
	var {itemName, itemNum, present } = props;
	//present = 1;
	let askForData = false;
	if(itemName == ""){
		askForData = true;
	}
	const askForDataFunc = () => {
		if(askForData){

		}
	}
	return (
		<div>
			
			<input type = "checkbox" ></input>
			<input type="text" name = {itemName} placeholder = {itemName}/>
			
			
		</div>
	);
}

export default ItemEntry;
