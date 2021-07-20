import { useState } from "react";

const Button =()=>{
    const [count,setcount] = useState(0)
    function increase(){
        setcount(count+1)
    }
    return (
        <button className="count" onClick={increase}>
            {count}
        </button>
    );
}
export default Button;