let numero1 = parseInt(prompt("Inrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let numero3 = parseInt(prompt("Ingrese el tercer numero"));

if(numero1>numero2){
    if(numero1>numero3){
        document.write("El numero mayor es " + numero1);
    }else{
        document.write("El numero mayor es " + numero3);
    }
}else if(numero2>numero3){
    document.write("El numero mayor es "+ numero2);
}else{
    document.write("El numero mayor es " + numero3);
}