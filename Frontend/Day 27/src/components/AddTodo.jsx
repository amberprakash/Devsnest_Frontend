import { useState } from "react";
import { useDispatch } from "react-redux";
import {addItm} from "../acions";


const AddTode = () =>{
    const [item,setItem]=useState("");
    const dispatch=useDispatch();
    return <div>
          <input type="text" placeholder="Add a Tode..." value={item} onChange={(e)=>{
            setItem(e.target.value);
          }}></input>
          <button onClick={()=>{
            dispatch(addItm({
              title:item,
              done:false,
            }));
              setItem("");
          }}>Add</button>
          
        </div>
    
}
export default AddTode;