import React from "react";
import "./ItemEntry.css";
import makeCheckForItem from "../makeCheckForItem/makeCheckForItem";

function ItemEntry(props) {
	/*const*/ 
	const {itemName, itemNum, present } = props;
	//present = 1;

	return (
		<div>
				 {itemName} {itemNum} {present}
		</div>
	);
}

export default ItemEntry;
