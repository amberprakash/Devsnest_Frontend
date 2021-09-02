
import './App.css';
import { incNumber, decNumber,namechange,pass } from "./action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  
  const data= useSelector((state)=> state.data);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div><h1>SIGN IN</h1></div>
      <div>
        <input className="username" placeholder="USERNAME" onChange={(e)=>{
          console.log(e.target.value);
           dispatch(namechange(e.target.value));
        }}></input>
        <input className="password" placeholder="PASSWORD" onChange={(e)=>{
          console.log(e.target.value);
          dispatch(pass(e.target.value));
        }}></input>
      </div>
      <div className="details">
          <h3>NAME</h3>:<span>{data.name}</span>
          <h3>PASS</h3>:<span>{data.pass}</span>
      </div>
      {/* <button onClick={() => {
        dispatch(decNumber());
      }}>-</button>
      <span>{count}</span>
      <button onClick={() => {
        dispatch(incNumber());
      }}>+</button> */}
    </div>
  );
}

export default App;
