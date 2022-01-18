const varnew = ["1","2","7","C","D","3","+"];

var result = null;
result =[];


var callPoints = (pointsarray)=>{

    for(let x of pointsarray){
        if(!isNaN(x)){
            result = [...result,parseInt(x)];
            console.log("inside if loop");
        }else if(x==="C"){
            console.log("inside C loop");
            result.pop();
        }else if(x==="D"){
            console.log("inside D loop");
            result = [...result, result[result.length-1]*2];
        }else if(x==="+"){
            console.log("inside + loop");
            result = [...result, parseInt(result[result.length-1]) + parseInt(result[result.length-2])]
        }
        
        console.log(x);
    }
    var temp = 0;
        for(var x =0 ; x<result.length; x++){
           temp = temp + result[x];
        }
    console.log(temp);
    return result;
}


console.log(callPoints(varnew));