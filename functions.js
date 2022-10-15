
function doubleTheInputNumber() {
    // double the number
    let inputNumber
    let result
    inputNumber= Number(prompt("Give me a number"))
    result = inputNumber * 2
    alert("The double of "+ inputNumber + " is : "+ result)
}


function division(){
    let inputNumber1
    let inputNumber2
    inputNumber1= Number(prompt("Give me a al ma9soume"))
    inputNumber2 =Number(prompt("Give me al 9assime"))
    let result
    result = inputNumber1 / inputNumber2
// alert("the result of " +  inputNumber1/inputNumber2 +"is : "+ result)
    alert("the result of " +  inputNumber1 + "/" + inputNumber2 +" " +"is : "+ result)
    alert("the result of " +  5*3+2-1 +"is : "+ result)
}

function inputPersonName(){
    let personName
    personName=prompt("What is your name")
    alert("Your name is "+ personName+ "@" +"%")
}


function gotoNextPage(){
    alert("You will go to Google page")
    window.location.replace("https://www.google.com/")
}


function compareTwoNumbers(){
    let number1 = Number(prompt("give me the first number "))
    let number2= Number(prompt("give me the second number"))
    let number3 = number2
    if(number2 > number1){
        alert("Number 2 is bigger")
    }else{
        alert("number 1 is bigger")
    }
}


function compareTwoNumbersV2(){
    let number1 = Number(prompt("give me the first number "))
    let number2= Number(prompt("give me the second number"))

    if(number1 > number2  ){
        alert("Number 1 is bigger")
    }
    else if(number1 - number2 == 0 ){
        alert("number 1 equals number 2")
    }
    else{
        alert("number 2 is bigger")
    }
    console.log("END ")
}

function checkAdmin(){
    let WhosThere ;
    WhosThere = prompt("Who is there")
    if(WhosThere == "cancel"){
        alert("Canceled")
    }
    else if(WhosThere=="other"){
        alert("I don't know you")
    }
    else if(WhosThere=="admin"){
        let password
        password=prompt("Password ?")
        if(password =="cancel"){
            alert("Canceled")
        }else if(password=="other"){
            alert("Wrong password")
        }else if(password=="themaster"){
            alert("welcome")
        }else{
            alert("SUPER Wrong password")
        }
    }
    else {
        alert("Wrong choice ")
    }
    alert("The end")
}


function maths(){
    let x1
    let x2
    let x3
    x1=Number(prompt("X1 = ?"))
    x2=Number(prompt("X2= ?"))
    x3=Number(prompt("X3 = ?"))
    if(x1<= x2){
        console.log("X1 =", x1 , "X2 =", x2 , "X3 =", x3)
        alert("valid choice")
        // X1 <= X3 <= X2.
        //X3 = 50 , X2=200 , X1 = 100
        if(x3 >= x1){

            if(x3 <= x2){
                alert("X3 IS BETWEEN x2 AND X1")
            }else if(x3 >= x2){
                alert("X3 is gretaer or equal than X1 and X2")
            }
        }
        else if(x3 <= x1){
            alert("X3 is less or equal than X2 and X1")
        }else if(x3 >= x2){
            alert("X3 is greater or equal than X2 and X1")
        }
    }else{
        alert("X2 must be greater or equal  than X1")
    }

}

function MathsV2(){
    let x1
    let x2
    let x3
    x1=Number(prompt("X1 = ?"))
    x2=Number(prompt("X2= ?"))
    x3=Number(prompt("X3 = ?"))



    if(x1<= x2){
        alert("valid choice")
        if( x3 <= x2 && x3 >= x1 ){
              //x1 = 100
              // x2 = 200
             // x3 = 30
            // true and false = false
            //  X x Y x Z = 1
            alert("X3 IS BETWEEN OR EQUAL x2 AND X1")
        }else if( x3 <= x1 ){
            alert("X3 is less or equal than X1 and X2")
        }else if( x3 >= x2){
            alert("X3 is gretaer than X1 and X2")
        }

    }else{
        alert("invalid choice")
    }
}

function amIDeveloper(){
    let profession = prompt("What is your work ?")
    if(profession =="fullstack" ){
        alert("Your are dev")
    }else if(profession =="front"){
        alert("Your are dev")

    }else if(profession=="back"){
        alert("you are dev")
    }else {
        alert("you are nothing")

    }
}

function amIDeveloperV2(){
    let profession = prompt("What is your work ?")

    if( profession =="front" || profession == "back" ){
        alert("Your are dev")
    }else if(profession =="fullstack" ){
        alert("you are super dev")
    }else{
        alert("you are nothing")
    }
}


function numberDays(){
 let months
 months = Number(prompt("Give me the month"))
 if(months >= 1 && months <= 12){
     alert("valid choice")
     if(months==2){
         alert("29 days")
     }else if  (months==4 ||months==6 || months ==9 || months ==11){
         alert("30 days")
     }else {
         alert("31 days")
     }
 }else{
     alert("invalid choice")
 }
}
// ! =

function leapYear(){
    let year
    year= Number(prompt("Give me a year "))
    if( year%4==0 && year%100 != 0 ){
        alert("leap year")
    }else if(year%400==0){
        alert("leap year")
    }else{
        alert("Not a leap year")
    }
}

function leapYearV2(){
    let year
    year= Number(prompt("Give me a year "))
    if( (year%4==0 && year%100 != 0) || (year%400==0) ){
        alert("leap year")
    }else{
        alert("Not a leap year")
    }
}


function  weekDay(){
    let weekday = Number(prompt("give me a weekday"))
    if(weekday >= 0 && weekday <= 6){
            if(weekday==0){
                alert("Sunday")
            }else if (weekday==1){
                alert("Monday")
            }
            //....etc
    }else{
        alert("invalid choice")
    }
}


function  weekDayV2(){
    let weekday = Number(prompt("give me a weekday"))
    //  0 , 1,2,999

    // "add" , "substract" , "multiply" , "divide" , "modulos" , "ksklsdqilqsd"
    switch (weekday){
        case 0 :
            alert("Sunday")

            break
        case 1 :
            alert("Monday")
            break
        case 2 :
            alert("Tuesday")
            break
        case 3 :
            alert("Wednesday")
            break
        case 4 :
            alert("Thursday")
            break

        case 5 :
            alert("Friday")
            break
        case 6 :
            alert("Saturday")
            break
        default :
            alert("invalid choice")
    }
}

function Calculator(){
    let num1 = Number(prompt("Give me the first number"))
    let num2 = Number(prompt("Give me the second  number"))

    let operation = prompt("Give me the operation")
    let result = 0

    switch (operation){
        case "add":
            result=num1+num2
            alert("the result is :" + result)
            break
        case "multiply":
            result=num1*num2
            alert("the reult is : " + result)
            break
        case  "subtract":
            result = num1-num2
            alert("teh result is : "+ result)
            break
        case "divide":
            result=num1/num2
            alert("the divide is : " + result)
            break
        case "modulos":
            result = num1%num2
            alert("modulos  :"+ result)
            break
        default :
            alert("invalid operation")
            break

    }
}


function WhatToDisplayInCalculator(){
    let num1 = Number(prompt("Give me the first number"))
    //50
    let num2 = Number(prompt("Give me the second  number"))
    //6
    let operation = prompt("Give me the operation")
    let result = 0

    switch (operation){
        case "add":
            result=num1+num2
            // alert("the result is :" + result)
            break
        case "multiply":
            result=num1*num2
            // 300
            // alert("the reult is : " + result)
            break
        case  "subtract":
            result = num1-num2
            // alert("teh result is : "+ result)
            break
        case "divide":
            result=num1/num2
            // alert("the divide is : " + result)
            break
        case "modulos":
            result = num1%num2
            // alert("modulos  :"+ result)
            break
        default :
            break

    }

    alert("I have to display in the calculator", result) // 300
}
