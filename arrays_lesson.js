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
            // console.log(i + " is Perfect !")
            perfectNumbers.push(i)
        }
        // console.log(" i =", i)
        i=i+1
    }

    return perfectNumbers

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
    alert("All the perfect numbers ="  +  arrayOfPerfectNumbers)
}


// arrays manipulations


function printArrayElements(array){
    let arrayLength = array.length
    let i =0
    while(i<arrayLength){
        if(i ==0){
            console.log("1ére elment is "+ array[i])

        }else{
            console.log( (i+1)+"éme elment is "+ array[i])

        }
        i=i+1
    }
}

function callPrintArrayElements(){
    let theArray = ["Arslene","Wassim","Oussama","Nazim" , "Mohammed" , "Sid Ahmed" ]
    console.log("ALl the array is :" , theArray)
    printArrayElements(theArray)
}

// sum of array
function sumArray(array){
    let somme= 0
    for(let i = 0 ; i< array.length ; i++){
        somme = somme +array[i]
    }
    return somme
}

function callSumArray(){
    let table = [23 , 40 , -7 , 11 , 55]
    let sum = sumArray(table)
    alert("the sum is :"+ sum)
}

function sumTwoArrays(arr1 , arr2){
    if(arr1.length !== arr2.length){
        return null
    }else{
        let result = []
        for(let i=0 ; i < arr1.length ; i=i+1){
            result[i]= arr1[i] + arr2[i]
            // result.push(arr1[i] + arr2[i])
        }
        return result
    }

}

function callSumTwoArrays(){
    let arr1 = [23 , 40 , -7 , 11 , 55]
    let arr2 = [23 , 40 , -7 , 11 , 55 ]
    // let arr2 = [23 , 40 , -7 , 11 , 55 , 99]
    let result = sumTwoArrays(arr1 , arr2)
    if(result !== null){
        alert("The sum is " + result)
    }else{
        alert("ERROR ! They must have the same length!")
    }

}

function CalculateSumOfSalariesInGoMyCode(instructorsArray){



    let sumSalary=0;
    for(let i = 0 ; i< instructorsArray.length ; i++){
        sumSalary = sumSalary + instructorsArray[i].salary
    }
    return sumSalary
}

function  callCalculateSumOfSalaries(){
    let instructors =[
        {fullname : "Metidji Sid Ahmed" , salary : 70000},
        {fullname : "Abdelkader Lounis" , salary : 30000},
        {fullname : "Afaf" , salary : 40000},
    ]
    let sum =CalculateSumOfSalariesInGoMyCode(instructors)
    alert("the sum is "+ sum)
}


function calculateSumArray2D(array2D){
    let global_sum=0
    for( let i =0 ; i< array2D.length ; i++ ){
        let arr1D = array2D[i]
        let local_sum=0
        for(let j =0 ; j< arr1D.length ; j++){
            local_sum = local_sum +arr1D[j]
        }
        global_sum= global_sum+local_sum
    }
    return global_sum
}


function callCalculateSumArray2D(){
    let array2D=[
        [ 1 , 2 , 3 , 4],
        [5 , 6 , 7 ,8]
    ]

    let sum = calculateSumArray2D(array2D)
    alert("the sum is "+ sum)

}
