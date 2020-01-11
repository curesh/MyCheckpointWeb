import React from "react";
import "./ItemEntry.css";

function ItemEntry(props) {
	const {itemName, itemNum, present } = props;

	return (
		<div>
			<ul>
				<li>
					{itemName}
				</li>
				<li>
					{itemNum}
				</li>
				<li>
					{present}
				</li>
			</ul>
		</div>
	);
}

export default ItemEntry;
