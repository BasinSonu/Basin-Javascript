/*
1. Write a function astroguru that:
A. Takes four arguments: number of children, spouses name, location and job
B. Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’.
*/

function astroguru(NumberOfChildren,SpouseName,Location,Job){
    console.log(`You will be a ${Job} in ${Location} and married to ${SpouseName} with ${NumberOfChildren} kids`);
}
astroguru(2,"isha","ernakulam","full stack developer");


/*
2. Write a function that compares two numbers and returns the larger of the two.
Bonus: Output appropriate message if numbers cant be compared or are equal"
*/

 function LargestOfTwo(a,b){
     if(a>b){
         return(a);
     }
     else if(b>a){
         return(b);
     }
     else if(a==b){
         console.log("numbers are equal");
     }
     else{
         console.log("check your input");
     }
 }
 console.log(LargestOfTwo(10,20));