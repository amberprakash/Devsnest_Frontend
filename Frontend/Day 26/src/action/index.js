const incNumber = () => {
    return {
        type:"INC_NUMBER",
    };
};

const decNumber = () => {
    return {
        type:"DEC_NUMBER",
    };
};
const namechange = (name) =>{
    return{
        name:name,
        type:"NAME_CHANGE",
    }
}
const pass = (pass) =>{
    return {
        pass:pass,
        type:"PASS_CHANGE",
    }
}

export { incNumber, decNumber,namechange,pass };