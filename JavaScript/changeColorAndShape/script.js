const outerDiv = document.querySelector('.outerDiv');
const innerDiv = document.querySelector('#innerDiv');
const colorBtn = document.querySelector('.changeColor');
const shapeBtn = document.querySelector('.changeShape');

let color = ["blue","brown","black"];
let clrClickCount = 0;
colorBtn.addEventListener('click',()=>{
    color.forEach((clr)=>{
        outerDiv.style.backgroundColor = color[clrClickCount];
    })
    clrClickCount++;
    if(clrClickCount==color.length){
        clrClickCount=0;
    }
});

let shape = ['square','triangle','circle'];
let shapeClickCount =1;
shapeBtn.addEventListener('click',()=>{
    shape.forEach(()=>{
        console.log(shape[shapeClickCount]);
        innerDiv.className = shape[shapeClickCount];
    })
    shapeClickCount++;
    if(shapeClickCount==shape.length){
        shapeClickCount=0;
    }
})

// let num = [1,2,3,4,5,6,7,8,9,10];
// let clickCount =0;
// colorBtn.addEventListener('click',()=>{
    
//     // for(let i =0; i<num.length; i++){
//     //     console.log(num[clickCount]);
//     // }
//     // for(let i in num){
//     //     console.log(num[clickCount]);
//     // }
//     num.forEach((n)=>{
//         console.log(num[clickCount]);
//     })
//     clickCount++;
// })