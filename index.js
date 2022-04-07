
//DOM elements
const containerAll = document.querySelector('.container');
let btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    btn3 = document.getElementById('btn3'),
    btn4 = document.getElementById('btn4')


//Hallar el menor de dos numeros enteros positivos

    btn1.addEventListener('click', ( ) => {
   let inputNum1 = Number(document.querySelector('.input1').value)
   let inputNum2 = Number(document.querySelector('.input2').value)
   
   let result = menorNum(inputNum1, inputNum2)
   let result2 = (inputNum1 === inputNum2) ? alert('Por favor ingrese numeros diferentes') :  alert(`El numero menor es: ${result}`)
   return result2
})
    const menorNum = ( a, b) => {
        let arr = [];
        arr.push(a, b)
        let minim = Math.min(...arr)
        //console.log(minim);
        return minim
    }

    
    //Determinar si los dos números ingresados son iguales

    btn2.addEventListener('click', ( ) => {
      let inputNum1 = Number(document.querySelector('.input1').value)
      let inputNum2 = Number(document.querySelector('.input2').value)
       
      let mayorNum = (inputNum1 > inputNum2 || inputNum1 < inputNum2) ? 'Los numeros son diferentes' : 'Los numeros son iguales'
      alert(mayorNum)
    })

    

    //Intercambiar los valores de los dos números
    btn3.addEventListener('click', ( a,b ) => {
    let inputNum1 = Number(document.querySelector('.input1').value)
    let inputNum2 = Number(document.querySelector('.input2').value)
   //console.log(inputNum1, inputNum2);
        let result = intercambiarInput( inputNum1, inputNum2 )
        alert(`Los numeros invertidos son: ${result[0]} y ${result[1]} `); 
        
    })

    const intercambiarInput = (inputNum1, inputNum2) => {
        let arrInputValue = []
        arrInputValue.push(inputNum1,inputNum2 )
        return arrInputValue.reverse()
    }






    //Sumar los dos números
   
    btn4.addEventListener('click', ( ) => {
        let inputNum1 = Number(document.querySelector('.input1').value)
        let inputNum2 = Number(document.querySelector('.input2').value)
        
             let resultSuma = Sumar(inputNum1,inputNum2 )
             alert(`La suma es: ${resultSuma}`);
     
         })

         const Sumar = ( inputNum1,inputNum2 ) => {        
           let result = inputNum2 ? Sumar(inputNum1 ^ inputNum2, (inputNum1 & inputNum2) << 1) : inputNum1;
         return result
    }
    
