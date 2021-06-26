function printHistoryBooked(num){
 document.getElementById("booked").innerText=num;
}
function printHistoryleft(num){
    document.getElementById("left").innerText=num;
}



const seat=document.querySelector(".seat");
var booked=0;
var unbooked=30;
for(let i=0;i<30;i++){
    const item=document.createElement("div");
    item.addEventListener('click',()=>{
        const check=item.style.backgroundColor;
        if(check=="grey"){
            item.style.backgroundColor="brown";
            booked--;
            unbooked++;
            printHistoryBooked(booked);
            printHistoryleft(unbooked);
        }
        else{
            item.style.backgroundColor="grey";
            
            booked++;
            unbooked--;
            printHistoryBooked(booked);
            printHistoryleft(unbooked);
        }
    });
    seat.append(item);
}