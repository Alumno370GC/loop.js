for(let i =0; i<3; i++){

console.log("Hello, world!");

}

for (let i = 1; i<6; i++){
console.log("Hello, world!",i);
}

/* Example 2: Display Sum of n Natural Numbers  */

//program to display the sum of natural numbers

let sum = 0;
const n = 100;

//loop from i = 1 to i = n
//in each iteration, i is increased by 1

for (let i =1; i<=n;  i++){

sum +=i; // sum = sum + i


}

console.log(`sum: ${sum}`);


//Iterate Through an Array an Array


const fruits = ["apple","banna", " cherry"];

for (let i =0; i< fruits.length;  i++){
console.log(fruits[i]);
    
    
    }

    //libro

function one(){
   var a =1;
   console.log(a);

    }

    function two(){

 //this a only belong to the  two function

 var a=2;
 console.log(a);

    }

    one();
    two();

//2
    function outher(){
    var a = 1;

    

    function inner(){

        var b = 2;


        console.log(a +b);

    }


inner();
console.log(a);

    }
    outher();















