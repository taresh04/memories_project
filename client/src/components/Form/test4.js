const result = [];
result.length = 3; //n=2
var firstCount= 0;
function combine(input, len, start) {
    // firstCount++;
    // console.log(firstCount);
  if(len === 0) {
    console.log( result.join(" ") ); //process here the result
    return;
  }
  
  for (let i = start; i <= input.length - len; i++) {
    result[result.length - len] = input[i];
    //  console.log(input[i]);
    combine(input, len-1, i+1 );
  }
}

const array = ["apple", "banana", "lemon", "mango"];    
combine( array, result.length, 0);
// console.log(firstCount);