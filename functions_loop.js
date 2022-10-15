function from1toN(){
    let Ntimes= Number(prompt(" N times ?"))
    for(let i =1 ; i <=Ntimes ; i=i+1  ){
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
