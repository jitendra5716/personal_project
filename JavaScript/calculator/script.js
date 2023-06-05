// const display = document.getElementsByClassName('inputArea')[0];
const buttons = document.getElementsByClassName('btn');
const display = document.getElementById('content');

let operand1 = 0;
let operand2 = null;
let operator = null;

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        let val = this.getAttribute('value');
        switch(val){
            case 'ac':
                display.innerText="";
                break;
            case '+/-':
                // let finalPlus = val.slice(0,1);
                // let finalMinus = val.slice(-1);
                // display.innerText=finalMinus;
                break;
            case '%':
                operand1 = display.innerText;
                display.innerText="";
                display.innerText+=val;
                
                break;
            case '/':
                operand1 = display.innerText;
                display.innerText="";
                display.innerText+=val;
                break;
            case '*':
                operand1 = display.innerText;
                display.innerText="";
                display.innerText+=val;
                break;
            case '-':
                operand1 = display.innerText;
                display.innerText="";
                display.innerText+=val;
                break;
            case '+':
                operand1 = display.innerText;
                display.innerText="";
                display.innerText+=val;
                break;
            case '=':
                if(operand1==null || operator==null){
                    display.innerText="Error";
                }else{
                   
                    operand2 = display.innerText;
                    display.innerText="";
                    let res = eval(operand1+" "+operator+" "+operand2);
                    display.innerText = res;
                }
                
                // operand1 = display.innerText;
                break;
            default :
                if(display.innerText=='Error'){
                    display.innerText="";
                }
                let temp = display.innerText;
                if(temp == '+' || temp == '-' || temp=='*'|| temp=='/'|| temp=='%'){
                    operator=display.innerText;
                    display.innerText="";
                }
                    display.innerText+=val;
               
                
        }
    })
}
