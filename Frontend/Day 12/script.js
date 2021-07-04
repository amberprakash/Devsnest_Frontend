const input=document.getElementById("inpt");
const btn = document.getElementById("addbtn");
const list=document.querySelector(".list");
var i=0;
console.log(input.value);
btn.addEventListener("click",()=>{
    if(input.value){
        const maindiv=document.createElement('div');
        maindiv.innerText=input.value;
        maindiv.classList.add('item');
        const span=document.createElement('span');
       
        // span.classList.add('span');
        maindiv.appendChild(span);
        const innerdivoflist=document.createElement('div');
        innerdivoflist.classList.add('item-main');
        innerdivoflist.id=`${i}`;
        i++;
        innerdivoflist.appendChild(maindiv);
        
        const del=document.createElement('button');
        del.classList.add('del');
        del.dataset.value=1;
        
        innerdivoflist.appendChild(del);
        list.appendChild(innerdivoflist);
        input.value=""
    }
});
document.querySelector(".list").addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target.dataset.value==='1'){
       e.target.parentNode.remove();
    }
});

