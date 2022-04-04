
//DOM elements
const containerAll = document.querySelector('.container');
let btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    btn3 = document.getElementById('btn3'),
    btn4 = document.getElementById('btn4')

   //console.log(inputNum1, inputNum2);
    //Hallar el menor de dos numeros enteros positivos

    btn1.addEventListener('click', ( ) => {
   let inputNum1 = Number(document.querySelector('.input1').value)
   let inputNum2 = Number(document.querySelector('.input2').value)
   console.log(inputNum1, inputNum2);
        let result = menorNum( inputNum1, inputNum2 )
        console.log(result);

    })

    const menorNum = ( inputNum1, inputNum2) => {
        let arr = [];
        arr.push(inputNum1, inputNum2)
        let minim = Math.min(...arr)
        console.log(minim);
        return minim
    }

    
    //Determinar si los dos números ingresados son iguales

    btn2.addEventListener('click', ( a, b) => {
       switch(true) {
           case a === b: 
           alert('Los numeros son iguales')
           break;
           default: alert('Los numeros son diferentes')
       }
    })

    
    //Intercambiar los valores de los dos números
    btn3.addEventListener('click', ( a,b ) => {
        
    })

    //Sumar los dos números

    btn4.addEventListener('click', ( a, b) => {
        let result= a + b;
             alert(`La suma es ${result}`)
    })


    
 