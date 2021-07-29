import { useState,useEffect } from "react";

function Item(props){
    const item=props.item;
    const [itemName,setItemName]=useState("");
    const [calorie,setCalorie]=useState("");
    const [status,setStatus]=useState(false);
    
    useEffect(()=>{
        setItemName(item.name);
        setCalorie(item.calorie);
    },[])
    function nameChangehandler(e){
        setItemName(e.target.value);
    }
    function calorieChanehandler(e){
        setCalorie(e.target.value);
    }
    function handleEdit(){
        setStatus(!status);
    }
    function handleDone(){
        setStatus(!status);
        props.updateItem(item.name, itemName, calorie);
    }
    return(
        <div className="item">
            {
                status ? (
                    <div className="input-edit">
                        <input className="newname" type="text" placeholder="Item Name" value={itemName} onChange={nameChangehandler} required/>
                        <input className="newcalorie" type="number" placeholder="Calories" value={calorie} onChange={calorieChanehandler} required/>
                    </div>

                ):(
                    <div className="show">
                        <h3>{item.name}</h3>
                        <p>{`You have consumed ${item.calorie} calories`}</p>
                    </div>
                )
            }
            <div className="action">
                {
                    status ? <button className="done" onClick={handleDone}>Save Item</button> : <button className="edit" onClick={handleEdit} >Edit Item</button>
                }
                <button className="delete" onClick={()=>{props.deleteItem(item.name);}}>Delete Item</button>
            </div>
            
        </div>
    )
}


function Itemlist(props){
    const items=props.items;

    return(
        <div className="itemlist">
            {
                items.length !==0 ?
                items.map((item) => <Item key={item.name} item={item} updateItem={props.updateItem} deleteItem={props.deleteItem} />)
                : 'Start Adding Items'
            }
        </div>
    )
}

export default Itemlist;