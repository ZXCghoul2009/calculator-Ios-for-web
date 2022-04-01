let a = '';
let b = '';
let sign = '';
let eq = false

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['+','-','x','/','%',];

//display
const out=document.querySelector('.display p')

function clearAll() {
 a = '';
 b = '';
 sign = '';
 eq = false;
 out.textContent = '0';
}
document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick=(event) => {
if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
     out.textContent = '';

     const key= event.target.textContent;

     if (digit.includes(key)) {
         if(b ==='' && sign ==='') {
         a+=key;
         console.log (a, b ,sign);
         out.textContent = a ;
         }
         else if (a!=='' && b!=='' && eq) {

         }
         else {
             b+=key;
             out.textContent= b;
         }
         console.log (a, b ,sign);
         return;
     }
    if (action.includes(key)) {
        sign=key;
        out.textContent = sign ;

        return;
    }
    if (key==='='){
        switch (sign){
            case "+":
             a= (+a) + (+b);
             break;
            case "-":
                a= a - b;
                break;
            case "x":
                a= a * b;
                break;
            case "/":
                a= a / b;
                break;
            case "%":
                a= a /100 * b;
                break;
        }
        eq=true;
        out.textContent=a;
        console.log (a, b ,sign);
    }
}
