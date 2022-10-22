function isPerfect(x){
    if(SommeDividers(x)===x){
        return true
    }else{
        return false
    }
}

function perfectNumbers(N){
    let perfectNumbers = []
    let i = 1
    while(i<=N){
        if(isPerfect(i)){
            console.log(i + " is Perfect !")
        }
        console.log(" i =", i)
        i=i+1
    }


}





function SommeDividers(x){
    let somme =0;
    for(let i =1 ; i< x ; i=i+1){
        // console.log("test dividers = ", i)
        if(isPossibleToDivide(x, i)){
            somme = somme + i
        }
    }
    return somme
}


function isPossibleToDivide(x , y){
    if(x%y ===0){
        return true
    }else{
        return false
    }
}

function callPerfectNumbers(){
    let n = Number(prompt("Give me N :"))
    let arrayOfPerfectNumbers = perfectNumbers(n) // 50 => [ 6 , 28 ]
}
