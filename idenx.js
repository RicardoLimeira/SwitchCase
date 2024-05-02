let Num1 = parseInt(prompt("Digite o primeiro número"))
let Num2 = parseInt(prompt("Digite o segundo número"))
let opcao = parseInt(prompt("Escolha a operaç~çao que deseja realizar: "
+ "\n1 = +; \n2 -; \n3 = *; \n4 = /"))

//CRIANDO SWITCHCASE
switch (opcao) {
case 1:
        console.log(Num1 + " + " + Num2 + " = " + (Num1 + Num2))
        break;
case 2:
        console.log(Num1 + " - " + Num2 + " = " + (Num1 - Num2))
        break;
case 3:
        console.log(Num1 + " * " + Num2 + " = " +(Num1 * Num2))
        break;
default:
        console.log(Num1 + " \ " + Num2 + " = " + (Num1 / Num2))
        break;                        

}

