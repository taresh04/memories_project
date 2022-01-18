
var countElements = (arr)=>{
    var count = 0;
    for(let x of arr){
        // console.log(x);
        for(var i=0;i<arr.length;i++){
            // console.log(arr[i]);
            console.log(arr[i]);
            if((x+1) == arr[i]){
                count++;
                //   console.log(x);
                 break;
            }
        }
    }
    return count;
}

console.log(countElements([1,2,3]));