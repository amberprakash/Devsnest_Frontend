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
   const item =document.createElement('div');
   seat.appendChild(item);
   item.classList.add('amber');
   item.addEventListener('click',()=>{
       if(item.classList.contains('clicked')){
           item.classList.remove('clicked');
           booked--;
           unbooked++;
           printHistoryBooked(booked);
           printHistoryleft(unbooked);
       }
       else{
        item.classList.add('clicked');
           booked++;
           unbooked--;
           printHistoryBooked(booked);
           printHistoryleft(unbooked);
       }
   })
}
