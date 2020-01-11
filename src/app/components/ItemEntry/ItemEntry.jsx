import React from "react";
import "./ItemEntry.css";
import makeCheckForItem from "../makeCheckForItem";

function ItemEntry(props) {
	const {itemName, itemNum, present } = props;
	present = 1;

	return (
		<div>
			<makeCheckForItem present = {present}/> {itemName} {itemNum}
		</div>
	);
}

export default ItemEntry;
