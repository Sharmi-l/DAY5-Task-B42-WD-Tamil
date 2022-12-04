//a) Anonymous Fuction for odd numbers:

let array = ['3','8','19','5','10','16','33','7','14']

let odd = function(){
    for(i=0; i<array.length; i++){
        if (array[i] % 2 != 0){
            console.log(array[i])
        }
    }
}
odd(array)

//IIFE Fuction for odd numbers:


(function(array){
    for(i=0; i<array.length; i++){
        if (array[i] % 2 != 0){
            console.log(array[i])
        }
        }
})(['3','8','19','5','10','16','33','7','14']);

// OUTPUT FOR ODD NUMBERS:

// oddnumbers: ['3', '19', '5', '33', '7']

/*..................................................................................................................................*/

//b) Anonymous Fuction for all the strings to title caps in a string array:

let movie = ["vikram","cobra","gargi","captain","yaanai"];

let title_cap = function (arr) {
  let array = [];
      for(let i=0; i<arr.length; i++){
        array.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  
}
console.log(`Movie Names: ${array.join(",")}`);
}
title_cap(movie)

//IIFE Fuction for all the strings to title caps in a string array:

(function (arr) {
  let array1 = [];
      for(let i=0; i<arr.length; i++){
        array1.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  
}
console.log(`Movie Names: ${array1.join(",")}`);

})(["vikram","cobra","gargi","captain","yaanai"]);

// Output for all the strings to title caps in a string array:

// Movie Names: Vikram,Cobra,Gargi,Captain,Yaanai

/*..................................................................................................................................*/

//c) Anonymous Fuction for sum of the all numbers:

let sumofall = function(array){
let sum = 0;
for(let i=0; i<array.length; i++){
    sum = sum + (+array[i]);
}
console.log(`sum of all number: ${sum}`);
}
sumofall([3, 8, 19, 5, 10, 16, 33, 7, 14]);


// IIFE Fuction for sum of the all numbers:

(function(array) {
    let sum = 0;
for(let i=0; i<array.length; i++){
    sum = sum + (+array[i]);
}
console.log(`sum of all number: ${sum}`);
})
([3, 8, 19, 5, 10, 16, 33, 7, 14]);

// Output for sum of all numbers:

// sumofall: 115

/*..................................................................................................................................*/

//e) Anonymous Fuction for prime numbers:

let number = 20;
let primeNumber = function (arr) {
    var isprime; 
     for(let i=2; i<=arr; i++){
        
         for(let j=2; j<i; j++){
             if(i % j === 0){
              isprime = 0;
               break;
             }
             else{
            
             isprime = 1;
             break;
         }
    }
     if(isprime === 1){
         console.log('primenumber :', i);
     }
   
 }
   
 }
     primeNumber(number);


// IIFE Fuction for prime numbers:

(function (arr) {
    var isprime; 
     for(let i=2; i<=arr; i++){
        
         for(let j=2; j<i; j++){
             if(i % j === 0){
              isprime = 0;
               break;
             }
             else{
            
             isprime = 1;
             break;
         }
    }
     if(isprime === 1){
         console.log('primenumber :', i);
     }
   
 }
   
 })
     (20)
 /*..................................................................................................................................*/

//e) Anonymous Fuction for palindrome:

let stringData = function (arr) {
    let word = [];
    for(let i= arr.length-1; i>=0; i--){
        word.push(arr[i]);
}

console.log(word.join(""));
}

let palindrome = "malayalam".split("");
stringData(palindrome)

//IIFE Fuction for palindrome:

(function (arr) {
    let word = [];
    for(let i= arr.length-1; i>=0; i--){
        word.push(arr[i]);
}

console.log(word.join(""));
})("malayalam".split(""))

// Output for palindrome:

// malayalam

/*..................................................................................................................................*/

//f) Anonymous Function for Median:


let median = function(){
    let arr1 = [1,4,5,3,6]
    let arr2 = [2,7,8,9,10]
    let c = [...arr1,...arr2].sort((a,b)=>a-b)
    console.log(c)
    
    if(c.length%2 == 0){
        let EvenMedian = (c[(c.length/2)-1]+c[c.length/2])/2
        console.log(`Median of Even Numbers: ${EvenMedian}`);
    }
    else
        {
            let OddMedian = parseInt((c.length)/2)
        console.log(`Median of Odd Numbers: ${c[OddMedian]}`)
        }
    
}
median();

//OUTPUT:

//   Median of Even Numbers: 5.5

//IIFE Function for Median:

(function(arr3,arr4){

    //let arr3 = [1,4,5,3,6]
    //let arr4 = [2,7,9,8]
    let c = [...arr3,...arr4].sort((a,b)=>a-b)
    console.log(c)
        
    if(c.length%2 == 0){
    let EvenMedian = (c[(c.length/2)-1]+c[c.length/2])/2
    console.log(`Median of Even Numbers: ${EvenMedian}`);
     }
     else
    {
     let OddMedian = parseInt((c.length)/2)
     console.log(`Median of Odd Numbers: ${c[OddMedian]}`)
    }

})([1,4,5,3,6],[2,7,9,8])

//OUTPUT:

//        Median of Odd Numbers: 5

/*..................................................................................................................................*/

//g) Anonymous Fuction for Remove Duplicates:

let remove = function (arr) {
    let dupli = [];

for (let i=0; i<arr.length; i++) {
    if(dupli.indexOf(arr[i]) === -1){
      dupli.push(arr[i]);
    }
    }
    console.log(`Duplicates Removed: ${dupli}`);
}
let array = [1,2,5,2,'7a',3,'7a'];
remove(array)

//IIFE Fuction for Remove Duplicates:

(function (array) {
let dupli = [];

for (let i=0; i<array.length; i++) {
    if(dupli.indexOf(array[i]) === -1){
      dupli.push(array[i]);
    }
    }
    console.log(`Duplicates Removed: ${dupli}`);
}) ([1,2,5,2,'7a',3,'7a']);

// Output for Remove Duplicates:

// [1, 2, 5, '7a', 3]
/*..................................................................................................................................*/

//h) Anonymous Fuction for Rotate an Array by K times:

let Rotate = function(arr){ 
    let k = 3;

for(let i=0; i<k; i++){
arr.unshift(arr.pop());
}
console.log(` Given input =[1,3,7,6,4,5]; k = 3; Array Rotation: Result [${array}]`);
}
let array = [1,3,7,6,4,5];
Rotate(array)


//h) IIFE Fuction for Rotate an Array by K times:

(function (array) {
    let k = 3;

for(let i=0; i<k; i++){
array.unshift(array.pop());
}
console.log(` Given input =[1,3,7,6,4,5]; k = 3; Array Rotation: Result [${array}]`);
                                     
})([1,3,7,6,4,5])

// Output for Rotate an Array by K times:

// [6, 4, 5, 1, 3, 7]
