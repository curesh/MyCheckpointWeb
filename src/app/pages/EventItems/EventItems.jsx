import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import ItemEntry from '../../components/ItemEntry/ItemEntry';

function EventItems(props) {
	let m_eventName = "Sbhacks event";
	let m_date = 12262004;
	let m_dateString = m_date + " ";
	m_dateString = m_dateString.slice(0,2) + "/" + m_dateString.slice(2,4) + "/" + m_dateString.slice(4);
	const [items, setItems] = useState([]);
	useEffect(() => {
		setItems([
			{ itemName: "yerba", itemNum: 1, present: 1 },
			{ itemName: "mate", itemNum: 2, present: 0},
		]);
	}, []);
	const i = items.map(
		(item) => {
			return <ItemEntry itemName={item.itemName} itemNum={item.itemNum} present = {item.present} />;
		}
	);
	return (
		<div className eventNameClass>
			<h1>{m_eventName}</h1>
			<header className dateStringClass>
				<h1>{m_dateString}</h1>
				<ul>
					<li>
						{i}
					</li>
				</ul>
				<Link to="/myevents">Back</Link>
			
			</header>
		</div>
		
			
	);
}

export default EventItems;
