function printBooked(num){
    document.getElementById("booked").innerText=num;
}
function printleft(num){
    document.getElementById("left").innerText=num;
}

const master=document.querySelector(".master");
var booked=0;
var left=100
for(let i=0;i<100;i++){
    const item=document.createElement('div');
    master.appendChild(item);
    item.classList.add('amber');
    item.addEventListener('click',()=>{
        if(item.classList.contains('clicked')){
            item.classList.remove('clicked');
            booked--;
            left++;
            printBooked(booked);
            printleft(left);
        }
        else{
            item.classList.add('clicked');
            booked++;
            left--;
            printBooked(booked);
            printleft(left);
        }
    })

}