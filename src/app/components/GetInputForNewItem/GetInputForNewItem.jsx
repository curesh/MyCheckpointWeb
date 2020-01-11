import React, {useState, useEffect} from "react";
import "./GetInputForNewItem.css";

function GetInputForNewItem(props) {
    const [data, setData] = useState({})

    useEffect(() => {
        setData({
            itemName: "",
            present: false
        })
    }, [])


    const onChange = (event) => {
        setData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const {itemName, present} = data

    return (
        <div>
                <input placeholder = "Item Name" name = "itemName" onChange = {onChange} value = {itemName}></input>
                <input type="checkbox" placeholder = "Do you have it already?" name = "present" onChange = {onChange} value = {present}></input>
            </div>

    )
}
/*
class GetInputForNewItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            itemName: "",
            present: ""
        }
    }

    onChange = event => {
        let value = event.target.value || "";
        this.setState({[event.target.name]: value});
    }
    render() {
        return (
            <div>
                <input placeholder = "Item Name" name = "Item Name" onChange = {this.onChange} value = {this.state.itemName}></input>
                <input placeholder = "Do you have it already?" name = "Item Name" onChange = {this.onChange} value = {this.state.present}></input>
            </div>
        )

    }

}
*/

export default GetInputForNewItem;