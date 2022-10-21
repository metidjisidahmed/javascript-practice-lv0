function from1toN(){
    let end= Number(prompt(" N times ?"))
    for(let i =1 ; i <=end ; i=i+1  ){
        console.log("i = "+ i)
    }

}


function divisbleNumbersByN(){
    let divider =Number(prompt("Give me a divider"))
    let compteur =0;
    //divider = 3
    for (let i = 1 ; i<= 100000 ; i=i+1){
        // console.log( i+"%"+divider +" = "+ i%divider)
        if(i%divider ==0){
            console.log(i + " is divided by : "+ divider)
            compteur= compteur+1
            console.log("compteur =", compteur)

        }
    }
    console.log("Number of multiplyers of "+ divider + " is : "+compteur)
}

function factorial(){
    let number=Number(prompt("Give me a number to calculate its factorial"))
    let result =1
    for(let i = 2 ; i<= number ; i=i+1 ){
        console.log("i = "+ i )
        result = result*i
        console.log("result = "+ result)
    }
    console.log("result = "+ result)


}

function factorialWhile(){
    let number=Number(prompt("Give me a number to calculate its factorial"))
    let result =1
    let i = 1
    while(i<= number ){
        result = result*i
        console.log(result)
        i=i+1
    }
    alert(number+"! = "+ result)
}



function factorialBackward(){
    let number=Number(prompt("Give me a number to calculate its factorial"))
    let result =1
    for(let i = number ; i>= 2 ; i=i-1 ){
        console.log("i = "+ i )
        result = result*i
        console.log("result = "+ result)
    }
}


function verifyIsPrimalNumber(){
    let number= Number(prompt("Give me the number to check whether it's primal or not"))
    let compteur=0
    // for(let i = number; i>= 1 ; i=i-1) {
        for(let i = 1 ; i<= number ; i=i+1) {
            if(number%i ==0){
                compteur = compteur+1
                console.log(i+ " divides "+ number)
            }
        }
    alert("compteur = "+compteur)
    if(compteur !=2){
        alert("He is not primal")
    }else{
        alert("he is primal")
    }
}

function fizzBuzzWhile(){
    let i =1
    while (i<101){
        if(i%3==0 && i%5 ==0){
            console.log("FizzBuzz")
        }else if(i%3==0){
            console.log("Fizz")
        }else if (i%5==0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
        // i=i+50
        // i+=50
        i=i+1

        // i++
        // // i = i-1
        // i--
    }
}

function EnigmeSolution(b){
    let a =0

    let max = 0

    let finalA = null
    let finalB = null
    while( b>= a){
        let inigme =  a*a*b
        // console.log("current inigme = ", inigme)
        if(inigme > max ){
            // console.log("the current inigme is bigger than my current max ! ")
            max= inigme
            finalA = a
            finalB=b
            // console.log("current max =" + max)
            // console.log("current final A = "+a)
            // console.log("current final B = "+ b)
        }
        a=a+1
        b=b-1
    }

    // console.log("MY FINAL A =", finalA)
    // console.log("MY FINAL B =", finalB)
    // console.log("MY FINAL MAX =", max)

    return max

}

function leapYear(year){
    // year= Number(prompt("Give me a year "))
    if( year%4==0 && year%100 != 0 ){
        alert("leap year")
        return true
    }else if(year%400==0){
        alert("leap year")
        return true
    }else{
        alert("Not a leap year")
        return false
    }
}

function numberDays(year){
    let months
    months = Number(prompt("Give me the month"))
    if(months >= 1 && months <= 12){
        alert("valid choice")
        if(months==2){
            if(leapYear(year)){
                alert("29 days")

            }else{
                alert("28 days")
            }
        }else if  (months==4 ||months==6 || months ==9 || months ==11){
            alert("30 days")
        }else {
            alert("31 days")
        }
    }else{
        alert("invalid choice")
    }
}








