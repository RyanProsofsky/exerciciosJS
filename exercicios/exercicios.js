//1 - Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo. 
/*
let base = prompt('Digite o valor da base');
let altura = prompt('Digite o valor da altura')  ;                               
let total = base * altura

console.log(O valor da área é de: ${total});
*/



//2 - Verifique se um número é primo: Crie um programa que determine se um número é primo ou não. (Um número primo é aquele que é dividido apenas por um e por ele mesmo. Entre 0 e 100 existem apenas 25 números primos.)





//3 - Calcule o fatorial de um número: Escreva um programa que calcule o fatorial de um número dado.





//4 - Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 
let nomeFuncionario = prompt('Digite o nome do funcionário: ')
let salarioMensal = prompt('Digite o sálario: R$')
let percentualReajuste = prompt('Digite o percentual de reajuste: ')
let salarioFinal 




//5 - Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 
/*
let n1 = prompt('Digite o primeiro valor: ');
let n2 = prompt('Digite o segundo valor: ');

if(n1 > n2){
    console.log(n1);
}else{
    console.log(n2);
}
*/


//6. Construa um algoritmo que calcule o valor do comprimento da circunferência, a partir do valor do raio.
/*
let valorRaio = prompt('Digite o valor do raio: ');
let valorConta = (valorRaio * 2) * 3.14

console.log(valorConta);

*/


//7. Desenhe um algoritmo que receba dois numeros e exiba o resultado da sua soma.
/*
let n1 = prompt('Digite o primeiro valor: ');
let n2 = prompt('Digite o segundo valor:  ');
let total = parseInt(n1) + parseInt(n2);

alert('O valor total é de ' + total);
*/


//8. Desenhe um algoritmo que receba dois numeros e mostre a soma, a subtracao, a multiplicação e a divisao dos numeros.
/*
let n1 = prompt('Digite o primeiro valor: ');
let n2 = prompt('Digite o segundo valor: ');
let resultadoAdicao = parseInt(n1) + parseInt(n2);
let resultadoSubtracao = n1 - n2
let resultadoDivisao = n1 / n2
let resultadoMultiplicacao = n1 * n2

console.log(resultadoAdicao);
console.log(resultadoSubtracao);
console.log(resultadoDivisao);
console.log(resultadoMultiplicacao);
*/





//9. Desenhe um algoritmo para determinar o consumo medio de um automovel, considerando que a distancia total percorrida \ne o total de combustivel gasto sao fornecidos.




//10. Elabore um algoritmo que leia o nome de um vendedor, o seu salario fixo e o total de vendas efetuadas por ele no mes (em dinheiro). Sabendo que esse vendedor ganha 15 de comissao sobre suas vendas efetuadas, faça que o algoritmo informe o seu nome, o salario fixo e salario no final do mês.




//11. Crie um algoritmo que leia o nome de um aluno e as notas das tres provas que ele obteve no semestre, com pesos 2, 3 e 5. No final, deve-se informar o nome do aluno e a sua média ponderada.
/*
let nomeAluno = prompt('Digite seu nome: ');                        
let n1 = prompt('Digite a primeira nota: ');
let n2 = prompt('Digite a segunda nota: ');
let n3 = prompt('Digite a terceira nota: ');
let p1 = 2
let p2 = 3
let p3 = 5
let teste1 = n1 * p1
let teste2 = n2 * p2
let teste3 = n3 * p3
let total = teste1 + teste2 + teste3 
let totalPeso = p1 + p2 + p3
let resultadoFinal = total / totalPeso


console.log(`A média ponderada do ${nomeAluno} é ${resultadoFinal}`)
*/




//12. Desenhe um algoritmo que leia uma temperatura em graus Celsius e a apresente convertida em graus Fahrenheit. \nA formula de conversao: F = (9 * C + 160) / 5, sendo F a temperatura em graus Fahrenheit e C, a temperatura em graus Celsius.
/*
let grausCelsius = prompt('Digite a temperatura °C: ');
let conversaoGraus = ((9 * grausCelsius) + 160 ) / 5

console.log(`O valor da temperatura em °f é de: ${conversaoGraus}`)

*/



//13. Elabore um algoritmo que efetue a apresenta  o do valor da conversao em real (RS) de um valor lido em dolar (USS). O algoritmo dever  solicitar o valor da cotacao do dolar e tambem a quantidade de dolares disponiveis com o usuário.
/*
let valorDolar = prompt('Digite o valor em Dolar: ');
let valorCotacao = prompt('Digite o valor da cotação: ');      
let conversao =  parseFloat((valorCotacao)) * parseFloat((valorDolar));

console.log(`O valor da conversão foi de: ${conversao}`);

*/


//14. Faca um algoritmo que calcule o rendimento de um deposito apos um mes de aplicacao. Considere fixa a taxa de juros de remuneracao, correspondente a 0,50% ao mes 



//15. Faca um algoritmo que receba um numero e mostre uma mensagem caso este seja maior que 10.
/*
let valor = prompt('Digite o valor: ');

 if(valor > 10){
    console.log('Numero maior que 10');
 }else{
    
 }
*/


//16. Crie uma contagem crescente até 10 a partir do 1.
/*
for(i = 0; i <= 10; i++){
    console.log(i);
}
*/





//17. Crie uma contagem decrescente de 10 até 1.
/*
for(i = 10; i >= 1; i--){
    console.log(i);
}
*/

//18. Crie a tabuada do 7.



//19. Crie um validador de Senha.



//20. Crie um Advinhador do numero secreto.



//21. Digite a altura de 5 jogadores de um time  de basquete e mostre a altura do menor e do maior jogador