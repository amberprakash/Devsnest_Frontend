//1.
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
const istFunction =(data)=>{
    console.log(Object.keys(data));
}

//2.
console.log("Before deleting");
console.log(student);
delete student.rollno;
console.log("After deleting -->");
console.log(student);

//3.
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.keys(student).length);

//4.
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

library.map((obj)=>{
   console.log("-Book Name:",obj.title,"-Auther Name:",obj.author,"-Reading Status:",obj.readingStatus); 
});

//5.
const volume = (radius,height)=>{
    radius=Number(radius);
    height=Number(height);
    var vol=3.14*radius*radius*height;
    return vol.toPrecision(6);
}
//6.
var library1 = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
var temp=[];
library1.map((obj) =>{
    temp.push(obj.libraryID);
});
temp.sort((a,b)=>b-a);
for(let i in temp){
    library1.map((obj)=>{
        if(obj.libraryID ===temp[i]){
            console.log(obj);
        }
    });
}