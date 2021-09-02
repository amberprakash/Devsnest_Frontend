const initisalState={name:"",pass:""};

const dataReducer = (state = initisalState,action) =>{
       if(action.type==="NAME_CHANGE"){
           return {...state,name:action.name}
       }
       if(action.type ==="PASS_CHANGE"){
           return {...state,pass:action.pass}
       }
       return state;
}
export default dataReducer;