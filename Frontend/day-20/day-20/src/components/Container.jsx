import { useState } from "react";
import Card from "./Card";
import Data from "./Data";
function Container(){
    const [value,setValue] = useState(Data);
    
    return(
        <div className="container">
           {
               value.map((e,index) =>(
                   <Card key={index} title={e.title} cal={e.cal} index={index}  Data={Data} setValue={setValue}/>
               ))
           }

        </div>
    )
    
}
export default Container;