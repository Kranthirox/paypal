
  let num1 = document.getElementById("in1").value
  let num2 = document.getElementById("in2").value
  let res  = document.getElementById("result")
function div(){
    let num1 = document.getElementById("in1").value
    let num2 = document.getElementById("in2").value
    let answer = num1 / num2
    res.value = answer
}
function multi(){
    let num1 = document.getElementById("in1").value
    let num2 = document.getElementById("in2").value
    let answer = num1 * num2
    res.value = answer

}
function sub(){
    let num1 = document.getElementById("in1").value
    let num2 = document.getElementById("in2").value
    let answer = num1 - num2
    res.value = answer
}
function add(){
    let num1 = parseInt( document.getElementById("in1").value);
    let num2 = parseInt( document.getElementById("in2").value);
    let answer = num1 + num2
    res.value = answer
}

/*function add(){
let num1 = document.getElementById("in-1").value
let num2 = document.getElementById("in-2").value
let result = document.getElementById("result")
console.log(num1 + num2)
   // let sum = num1 + num2   
    //result.value = sum
}
function sub(){
   // let sum = num1 - num2   
    //result.value = sum
   console.log(num1 + num2)
}
function div(){
    let sum = num1 / num2   
    result.value = sum
}
function multi(){
    let sum = num1 * num2   
    result.value = sum
}
*/