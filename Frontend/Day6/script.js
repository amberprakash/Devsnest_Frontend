// first function of assignment
console.log("1.Write a JavaScript function to check whether an `input` is an array or not");
const is_array = (data) =>{
    return Array.isArray(data);
};

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// 2. function of assignment 
console.log("Write a JavaScript function to clone an array");

const array_Clone =(data)=>{
    var d=data.slice(0);
    return d;
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//3. function of asignment 
console.log("Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.");

const first= (data,n) =>{
      if(!n){
          return data[0];
      }
      else if(n>=0){
          return data.slice(0,n);
      }
      else{
          return [];
      }
};

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//4. funtion of assignment 
console.log("Write a simple JavaScript program to join all elements of the following array into a string.");

let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));
console.log(myColor.join("+"));

//5. function of assignment
console.log("Write a JavaScript program to find the most frequent item of an array");
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max=0,item,count;
for(let i=0;i<arr1.length;i++){
    count=0;
    for(let j=i;j<arr1.length;j++){
        if(arr1[i]===arr1[j]){
           count++;
        }
    }
    if(count>max){
        max=count;
        item=arr1[i];
    }
}
console.log(item,"(",max," times)");

