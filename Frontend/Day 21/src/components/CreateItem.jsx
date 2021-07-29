import { useState } from "react";


function CreateItem(props) {
    const [itemName,setItemName]=useState("");
    const [calorie,setCalorie]=useState("");
    
    function changeHandleName(e){
        setItemName(e.target.value);
    }
    function changeHandleCalorie(e){
        setCalorie(e.target.value);
    }
    return (
        <div className="main">
            <div className="input">
                <input className="crateinput1" onChange={changeHandleName} value={itemName} placeholder="Item Name" type="text"></input>
                <input className="crateinput2" onChange={changeHandleCalorie} value={calorie} placeholder="Calorie" type="number"></input>
            </div>
            <div className="but">
                <button className="addbutton" onClick={(e)=>
                { e.preventDefault();
                  props.addItem(itemName,calorie);
                //   console.log("Button click");

                }}>Add</button>
            </div>
        </div>
    )
}

export default CreateItem;
