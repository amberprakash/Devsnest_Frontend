const center=document.querySelector(".center");

for(let i=0;i<400;i++){
    const item=document.createElement("div");
    center.append(item);
    item.addEventListener('click',()=>{
        const check=item.style.backgroundColor;
        if(check==="black"){
            item.style.backgroundColor="black";
        }
        else{
            item.style.backgroundColor="white";
        }
    })
    
}