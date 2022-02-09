 
function Calcular(sinais){
    var n1 = parseInt(document.getElementById('numero1').value);
    var n2 =parseInt(document.getElementById('numero2').value);
    var resultado = 0;
    switch(sinais){
        case '+':
            resultado = n1+n2;
            break;
        case  '-' :
            resultado = n1-n2;
            break;
        case '*':
            resultado = n1*n2;
            break;
        case '/':
            resultado = n1/n2;
    }
 escreve(resultado);
}
function escreve(n1){
    var output = document.querySelector('#output');
    output.innerHTML = n1;
}
    
