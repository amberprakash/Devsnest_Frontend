function changebackground(num){
    document.body.style.backgroundImage = "url('`${num}`')";
}
// function printoption1(num){
//     document.getElementById("answer1").innerText=num;
// }
// function printoption2(num){
//     document.getElementById("answer2").innerText=num;
// }
// function printoption3(num){
//     document.getElementById("answer3").innerText=num;
// }
// function printoption4(num){
//     document.getElementById("answer4").innerText=num;

setTimeout(()=>{
   document.body.style.backgroundImage = "url('./img/download.gif')";
},4000);

setTimeout(()=>{
    document.body.style.backgroundImage = "url('./img/2.gif')";
 },8000);
 setTimeout(()=>{
    document.body.style.backgroundImage = "url('./img/3.gif')";
 },12000);
 setTimeout(()=>{
    document.body.style.backgroundImage = "url('./img/4img.gif')";
 },16000);
 setTimeout(()=>{
    document.body.style.backgroundImage = "url('./img/5.gif')";
 },21000);
 setTimeout(()=>{
    document.body.style.backgroundImage = "url('./img/6.gif')";
 },25000);

var x=document.getElementById("background");
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
var i=0;
var score=0;
class questions {
    constructor(ques,opt1,opt2,opt3,opt4,corrAns){
        this.ques=ques;
        this.opt1=opt1;
        this.opt2=opt2;
        this.opt3=opt3;
        this.opt4=opt4;
        this.corrAns=corrAns;
        
    }
    showQues(){
        document.getElementById("quest").innerText=this.ques;
        document.getElementById("opt1").innerText=this.opt1;
        document.getElementById("opt2").innerText=this.opt2;
        document.getElementById("opt3").innerText=this.opt3;
        document.getElementById("opt4").innerText=this.opt4;
    }
    showCorrAns(){
        return `${this.corrAns}`;
    }
    
}
let q1=new questions(
    "1. What is name of seventh Hokage ?",
    "Naruto",
    "Minato",
    "Kakashi",
    "Hashirama",
    "opt1",
    "./img/download.gif"
)
let q2=new questions(
    "2. What is name of Nine tails ?",
    "Deidara",
    "Minato",
    "Kurama",
    "Hashirama",
    "opt3",
)
let q3=new questions(
    "3. Who is the leader of Akatsaki ?",
    "Pain",
    "Tobi",
    "Itachi",
    "Deidara",
    "opt1",
)
let q4=new questions(
    "4. Who was God of shinobi ?",
    "Naruto",
    "Minato",
    "Kakashi",
    "Hashirama",
    "opt4",
)
let q5=new questions(
    "5. Who is not member of Uchuha Clan ?",
    "Madara",
    "Sasuke",
    "Kakashi",
    "Itachi",
    "opt3",
)
arrquest=[q1,q2,q3,q4,q5];

arrquest[i].showQues();

document.querySelectorAll("#opt1, #opt2, #opt3, #opt4").forEach((elem)=>{
    elem.addEventListener("click",()=>{
        if(elem.id===arrquest[i].showCorrAns()){
            playclick();
            i++;
            score++;
            
            document.getElementById("score").innerHTML = score;
            elem.classList.add("correct-click");
            setTimeout(()=>{
             elem.classList.remove("correct-click");
            },1000);
            //print score 
        }
        // if(!arrquest[i]){
        //     document.querySelector("#last").style.display = "block";
        // }
        else{
            i++;
            playclick();
            elem.classList.add("wrong-click");
            setTimeout(()=>{
                elem.classList.remove("wrong-click");
            },1000);
            
        }
       setTimeout(() => {
           arrquest[i].showQues();
       }, 1500);
            
        //}
        
    });
});

document.getElementById("play").addEventListener("click",()=>{
    location.reload();
})