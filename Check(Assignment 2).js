/*
1. Iterate from 1 to 100(using for loop and if else statement) (Submittable assignment)/
Print Relevel if divisible by 3/
Print Buzz if divisible by 5/
Print 6indBuzz if divisible by 15/
Print the number if all the above condition fails0
*/

for(i = 1 ; i <= 100 ; i++ ){
    if(i%3 == 0){
        console.log("Relevel");
    }
    else if(i%5 == 0){
        console.log("Buzz");
    }
    else if(i%15 == 0){
        console.log("6indBuzz");
    }
    else{
        console.log(i);
    }
}


/*
Program to check if a number is odd or even
*/

// function OddOrEven(a){

let a = prompt("Enter the number")
if (a%2 == 0){
    console.log(`${a} is even`);
}
else if(a%2 != 0){
    console.log(`${a} is odd`);
}
else{
    console.log("invalid statement")
}
// }

// OddOrEven(20);



/*
Program to check if a number is a perfect square

*/

