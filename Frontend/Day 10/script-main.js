var x=document.getElementById("myaudio");
let xyz;
var flag=1;
function plays(){
x.play();
flag=1;
}
plays();
function playPausebg(){
    if(flag==0){
        x.play();
        flag=1;
    }
    else{
        x.pause();
        flag=0;
    }
}
var gameclick=document.getElementById("game-click");
function playclick(){
    gameclick.play();
}
var mat=document.getElementById("match");
function playmat(){
    mat.play();
}

let words=["Naruto","Sasuke","Kakashi","Obito","Madara","Hashirama","Tobirama","Itachi"];
words=[...words,...words];
let moves = 50;
let matches = 0;
let gameActive = true;

for(let i=1;i<=16;i++){
    let card = document.createElement("div");
    card.classList.add("flip-card");

    let inner = document.createElement("div");
    inner.classList.add("flip-inner");

    let front = document.createElement("div");
    front.innerHTML = "<h3>" + i +"</h3>";
    front.classList.add("front");

    let back = document.createElement("div");
    let rand = Math.floor(Math.random() * (16 - i));
    back.innerHTML = "<h2>" + words[rand] + "</h2>";
   

    words.splice(rand,1);
    back.classList.add("back");
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    document.getElementById("grid").appendChild(card);
}

let click;
let btns = document.getElementsByClassName("flip-card");

for(let i=0;i<16;i++){
    btns[i].addEventListener("click",(e)=>{
        playclick();
        if(!gameActive)return;
        moves--;
        document.querySelector("span").innerHTML=moves;
        if(click){
            
            btns[i].firstChild.classList.add("flipped");
            gameActive = false;
            setTimeout(() =>{
                if(xyz===btns[i].firstChild.firstChild.innerHTML){
                    moves++;
                    document.querySelector("span").innerHTML=moves;
                    return;
                }
                else if(!( btns[i].firstChild.lastChild.innerHTML === click.firstChild.lastChild.innerHTML)){
                    btns[i].firstChild.classList.remove("flipped");
                    click.firstChild.classList.remove("flipped");
                }
                 else{
                     playmat();
                     matches++;
                     btns[i].classList.add("visi");
                     click.classList.add("visi");
                 } 
                 click=undefined;
                 gameActive=true; 
            },500);
        }
        else{
            xyz=btns[i].firstChild.firstChild.innerHTML;
            click = btns[i];
            btns[i].firstChild.classList.add("flipped");
        }
    });
}

if(matches==8){
    alert("You Won ");
}