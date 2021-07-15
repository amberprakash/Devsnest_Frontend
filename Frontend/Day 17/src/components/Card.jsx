const Card =(props)=>{
    console.log(props)
    return(
        
            <div className="card">
                {/* <img src={props.img}/> */}
                <div className="title"><h1>{props.title || "Card Title"}</h1></div>
                {/* <button>Download</button> */}
                <h3>you have consumed {props.cal} cals today</h3>
            </div>
       
    )
}
export default Card;