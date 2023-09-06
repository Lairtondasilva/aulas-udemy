function plusMinus(arr) {
    
    const ratios = [0, 0, 0]
    for(let i = 0 ; i< arr.length; i++){
       if(arr[i]>0){
           ratios[0] += 1
           continue;
       }
       
       if(arr[i]<0){
           ratios[1] += 1;
           continue;
       }
       
       ratios[2] += 1
    }
    return ratios.map(value => Number((value/arr.length).toFixed(6)));
}
console.log(plusMinus([1,0,-1]))
console.log("     ".substring(0, 5)+ "#".repeat(1))
let s = "12:45:09PM"
console.log(s.slice(2, -2))

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let result = [0,0];
    
    for(const apple of apples){
        if(apple+a >= s && apple+a <= t){
            result[0] += 1;
        }
    }
    
    for (const orange of oranges){
        if(orange+b >= s && orange+b <= t){
            result[1] += 1;
        }
    }
    
    return result;
}

const a = countApplesAndOranges(5, 15, 3, 2, [-2,2, 1], [5, -6]);

console.log(a)


function kangaroo(x1, v1, x2, v2) {
    
    let i = 0;
    let result = "NO"
    
    while(i>0){
        x1 += v1; // 3
        x2 += v2; // 6
        
        if(x1>x2 && v1>v2){
            return result;
        }
        
        if(x1<x2 && v1<v2){
            return result;
        }
    
        if(x1 === x2){
         result = "YES";
         break;
        }
        i++;
    }
    return result;
}

console.log(kangaroo(0,3,4,2)); 3 6 6 8 9 10 12 12