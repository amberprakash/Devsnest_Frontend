// import Data from "./Data";
function Card(props){
    function rightClick(){
        const newdata=props.Data.filter((el,i) => i!=props.index);
        
        props.setValue(newdata);
    }
    return(
        <div className="card">
            <h1>{props.title}</h1> 
            <button onClick={rightClick} className="but">delete</button>
            <h3>you have consumed {props.cal} cals today</h3>
           
        </div>
    )
}
export default Card;