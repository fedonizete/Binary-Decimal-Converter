document.getElementById("submit").addEventListener("click", setCalc)
document.getElementById("number").addEventListener("keydown", checkerEntry)
document.getElementById("alter").addEventListener("click", alter)


const number = document.getElementById("number")
const result = document.getElementById("result")
const title = document.getElementById("title")
const convertFirst = document.getElementById("convertFirst")
const convertSec = document.getElementById("convertSec")


let countCalc = 0



// Entry
function checkerEntry(e){

    if(e.key === "Enter"){
        setCalc()
    }

    if(e.key === "Backspace"){
        reset(false)
    }

    const pattern = '[0-9\b\t\c]';
    const char = String.fromCharCode(e.keyCode);


    if(!char.match(pattern)){
        e.preventDefault()
    }else{
        result.value = ''
    }
}


//Main Switch
function alter(){
    countCalc += 1

    reset()

    if(countCalc % 2 === 0 ){
        convertFirst.innerHTML = "Binary"
        convertSec.innerHTML = "Decimal"
    }else{
        convertFirst.innerHTML = "Decimal"
        convertSec.innerHTML = "Binary"
    }

    
}


// Set Calc
function setCalc(){
    if(countCalc % 2 === 0 ){
        calcBin()
    }else{
        calcDec()
    }
}


// Reset
function reset(arg){

    if(arg == false){
        result.value = ''
    }else{
        result.value = ''
        number.value = ''
    }
    
}


// Calcs
function calcBin(){
    let entry = number.value;

    
    let index = 0
    let arrayResult = new Array()
    let plus = 0
    

    for(i = entry.length-1; i >= 0; i--){
        var dec = (2**i)*entry[index]
        arrayResult.push(dec)
        index++
    }

    

    for(i = 0; i < entry.length; i++){
        plus += arrayResult[i]
    }
    result.value = plus      
}


function calcDec(){
    let entry = number.value;

    let arrayDivision = new Array()
    let arrayDiv = new Array()

    let inverted = ''

    while(entry > 0){

        div = entry % 2
        entry = Math.floor(entry / 2)
        

        arrayDivision.push(entry)
        arrayDiv.push(div)

        if(entry == 1){
            arrayDivision.push(entry)
            arrayDivision.push(1)
            arrayDiv.push(1)
            break
        }
    }

    for(i = arrayDiv.length - 1; i >= 0; i--){
        inverted += arrayDiv[i]
    }

    result.value = inverted
}