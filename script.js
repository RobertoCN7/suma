function sum(n1,n2,n3) {

    let number1 = parseInt(document.getElementById("Number1").value);
    
    let number2 = parseInt(document.getElementById("Number2").value);
    
    let number3 = parseInt(document.getElementById("Number3").value);
    
    let result = number1+number2+number3;

    document.querySelector("#Results").innerHTML =  result;

    //return result;

    //console.log(result);
    
    }
    