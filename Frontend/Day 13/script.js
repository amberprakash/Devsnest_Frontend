const btn = document.querySelector("button");
const input = document.querySelector("input");
const display1= document.querySelector(".quote-display");
console.log(display1)
// console.log(display)

btn.addEventListener("click",()=>{
    
    fetch('https://api.quotable.io/random')
    .then(res =>res.json())
    .then((data)=>{
       getresponse(data.content)
    })  
})
function getresponse(data){
    // console.log(data)
    
    const quote = document.createElement('div');
    quote.classList.add('quote');
    quote.innerText=data;
    console.log(quote);
    display1.appendChild(quote);
}