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
