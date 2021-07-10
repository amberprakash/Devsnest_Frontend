function nameFocus(){
    alert("This field is mandatory")
    
}
let flag=1;
function focussed(){
    if(flag===1){
    alert("This field is mandatory");}
    flag=0;
}
// function Load(){
//     alert("Window Load succesfully");
// }
function SizeChange(){
    alert("Window Size changed");
}
function changeGender(){
    alert("Thankyou");
}
let college=1
function MouseOverEventCollege(){
    if(college===1){
    alert("This Is College Field ");}
    college=0;
}
let gender=1
function MouseOverEventGender(){
    if(gender===1){
    alert("This Is Gender Field");}
    gender=0;
}
function onFormSubmit(event){
    alert("Form Is Submitted Successfully");
    console.log('handle',event);
    // event.preventDefault(); // It prevent changing of window after submission of form 

}