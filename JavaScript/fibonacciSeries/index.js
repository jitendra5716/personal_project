console.log("fibonacci Series");

// function isFib(num){
//     let a =0;
//     let b= 1;
//     let c= a+b;
//     let i =1;
//     while(i<=num){
//         console.log(b);
//         a=b;
//         b=c;
//         c=a+b;
//         i++;
//     }
//     if(num==a){
//         console.log("True");
//     }else{
//         console.log("False");
//     }
// }

// isFib(5);

// var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];

// var numDay = function(n){
//    for(var i =0; i<days.length; i++){
//     return days[n-1];
//    }
// }
// console.log(numDay(2));

// Duplicate

// var arr = [1,2];
// var elem = function(){
//     for(var i =0; i<arr.length; i++){
//         return arr[i];
//     }
// }
// // console.log(ele);
// arr.splice(arr.length-1,0,elem);
// console.log(arr);

// left Rotation

// var arr = [1,2,3,4];

// function leftRotate(arr){
//     var temp = arr.shift();
//     arr.push(temp);
// }
// leftRotate(arr);
// console.log(arr);

// countDown Timer 

// let num =10;

// function timer(){
//     console.log(num);
//     num--;
//     if(num==0){
//         clearInterval(id);
//     }
// }
// let id = setInterval(timer,1000);

// count clicks

const box = document.getElementById('box');
const countSpan = document.getElementById('count');

let count =0;

box.addEventListener('click',()=>{
    count++;
    countSpan.innerText = count;
})