// let a = parseInt(prompt("enter the first number"));
// let b = parseInt(prompt("enter the second number"));
// const sign = prompt ('select an operator  [+,-,*,/]');
// if(sign == '+'){
//     c=a+b;   
// }
// else if(sign == '-'){
//     c=a-b;
// }
// else if(sign == '*'){
//     c=a*b;
    
// }
// else if(sign == '/'){
//     c=a/b;
// }
// else{
//     console.log("invalid statement");
// }

// console.log(`${a} ${sign} ${b} = ${c}`);


/*

=>  Prompt() is a Condition which is used to popup a blank input box where we can enter the input values.
=>  while using prompt the entered values will be assigned to the variables as strings, so if we are inputing numbers then we should use parseFloat() or parseInt() outside the prompt.
    i.e; parseInt(Prompt("statement"));
=>  To print values of two or more variables in console.log() you can use `${variable name}`
=>  Prompt() condition doesn't work in vscode,it only works with browsers.
*/

function calculator(a, b, sign){
if(sign == "+"){
    c=a+b;   
}
else if(sign == "-"){
    c=a-b;
}
else if(sign == "*"){
    c=a*b;
    
}
else if(sign == "/"){
    c=a/b;
}
else{
    console.log("invalid statement");
}
console.log(`${a} ${sign} ${b} = ${c}`);
}


calculator(15,30,"+");