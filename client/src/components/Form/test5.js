function solution(A) {
    // console.log(A.length);
    let testArray=[];
    // console.log(testArray.length);
    testArray = A.filter((value,index)=> A.indexOf(parseInt(value))===parseInt(index));
     console.log(testArray);
     testArray.sort((a, b) => a-b);
     console.log(testArray);
    let testArray2=[];
    for( x=0; x<testArray.length; x++){
        // console.log(testArray[x]);
        if(testArray[x]>0){
            console.log("inside if loop: ",testArray[x],"   ",x);
            let z=1;
            for(i=x;i<testArray.length;i++,z++){
                if(testArray[i]!==z){
                    console.log(testArray[i]," here ",z);
                    return z;
                }
            }
            return z;
        }
    }
    return 1;
    // for (i=0;i<testArray.length;i++){
    //     if(testArray[i]>0){

    //         // for(z=i;z<A.length;z++){

    //         // }
    //         // console.log("not required ", A[i]);
    //         testArray2.push(testArray[i]);
    //     }
    // }
    // if(testArray2.length==0){
    //     console.log("inside test loop");

    //     return 1;
    // }
    // // for (i=-1000000 ;i<=1000000;i++){
        
    // // }
    // console.log(testArray2);
    // for (i=0;i<testArray2.length;i++){
    //     // if(testArray[i]>=i+1)
    //     if(testArray2[i]!==i+1){
    //         // console.log(testArray2[i],"  ",i+1);
            
    //          return i+1;
    //     }
    // }
    
    // return testArray2;
}


// const s = [-1,-1,4,-2,3,-4,0,1,2,10,4,1,-8,2,3,7,5,5,-14,6,8,9,11,12,13,15];
const s = [-1, -3];
console.log(solution(s));

