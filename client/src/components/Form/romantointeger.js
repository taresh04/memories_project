var str = "MIX";
var value = 0;
// console.log(str[0]);
for(let i =0; i<str.length;i++){
    switch (str[i]) {
        
        case ("I"):
            if(str[i+1]=="V" || str[i+1]=="X"){
                
                if(str[i+1]=="V"){
                    value=value+4;
                }else{
                    value=value+9;
                }
                i++;
                break;
            }else{
                value = value+1;
                break;
            }

        case "V":
        value = value+5;
        break;

        case "X":
            if(str[i+1]=="L" || str[i+1]=="C"){

                if(str[i+1]=="L"){
                    value=value+40;
                }else{
                    value=value+90;
                }
                i++;
                break;
            }else{
                value = value+10;
                break;
            }
            
        case "L":
            value = value+50;
            break;

        case "C":
            if(str[i+1]=="D" || str[i+1]=="M"){
                if(str[i+1]=="D"){
                    value=value+400;
                }else{
                    value=value+900;
                }
                i++;
                break;

            }else{
               value = value+100;
               break; 
        } 

        case "D":
            value = value+500;
            break;  

        case "M":
            value = value+1000;
            break; 
    }
}

console.log(value);