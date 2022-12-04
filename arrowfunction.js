 
 //Arrow Fuction for odd numbers

let array = ['3','8','19','5','10','16','33','7','14']

let odd = array.filter((value) => {
    if(value % 2 === 1){
        return value;
   }
});

console.log('oddnumbers:', odd);

// OUTPUT FOR ODD NUMBERS:

// oddnumbers: ['3', '19', '5', '33', '7']

/*.....................................................................................................................*/

//Arrow Fuction for all the strings to title caps in a string array:

let movie = ["vikram","cobra","gargi","captain","yaanai"];

let title_cap = (arr) => {
  let array = [];
      for(let i=0; i<arr.length; i++){
        array.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  
}
console.log(array.join(","));
}
title_cap(movie)


// Output for all the strings to title caps in a string array:

// Movie Names: Vikram,Cobra,Gargi,Captain,Yaanai
/*......................................................................................................................*/

//Arrow Fuction for sum of the all numbers:

let array1 = [3, 8, 19, 5, 10, 16, 33, 7, 14]

//let array1 = ['3', '8', '19', '5', '10', '16', '33', '7', '14']

let sumofall = array1.reduce((sum, value) => {
    return value + sum;
});
console.log('sumofall:', sumofall);

// Output for sum of all numbers:
// sumofall: 115

/*......................................................................................................................*/

//Arrow Fuction for Prime Numbers:

let number = 20;

        let primeNumber = (arr) => {
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

/*......................................................................................................................*/

//Arrow Fuction for palindrome:

let stringData=(palindrome)=>{
    let word = [];
    for(let i= palindrome.length-1; i>=0; i--){
        word.push(palindrome[i]);
}

console.log(word.join(""));
}

let palindrome = "malayalam".split("");
stringData(palindrome)//calling

// Output for palindrome:
// malayalam







