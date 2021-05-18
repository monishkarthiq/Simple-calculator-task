var input01;
var input02;
var output;
var button;
var button_value;

function btn01() {
    input01 = document.getElementById("input01").value
    input02 = document.getElementById("input02").value
    button_value = document.getElementById("btn1").value
    let x = parseFloat(input01)
    let y = parseFloat(input02)
    calculator(button_value,x,y)
}

function btn02() {
    input01 = document.getElementById("input01").value
    input02 = document.getElementById("input02").value
    button_value = document.getElementById("btn2").value
    let x = parseFloat(input01)
    let y = parseFloat(input02)
    calculator(button_value,x,y)
}

function btn03() {
    input01 = document.getElementById("input01").value
    input02 = document.getElementById("input02").value
    button_value = document.getElementById("btn3").value
    let x = parseFloat(input01)
    let y = parseFloat(input02)
    calculator(button_value,x,y)
}

function btn04() {
    input01 = document.getElementById("input01").value
    input02 = document.getElementById("input02").value
    button_value = document.getElementById("btn4").value
    let x = parseFloat(input01)
    let y = parseFloat(input02)
    calculator(button_value,x,y)
}

function btn05() {
    input01 = document.getElementById("input01").value
    input02 = document.getElementById("input02").value
    button_value = document.getElementById("btn5").value
    let x = parseFloat(input01)
    let y = parseFloat(input02)
    calculator(button_value,x,y)
}

//calculator logic amd result function calling
function calculator(button_value1, x1, y1) {
    switch (button_value1) {
        case ("+"): {
            let i = x1 + y1;
            return postresult(i);
        }
        case ("-"): {
            let i = x1 - y1;
            return postresult(i);
        }
        case ("*"): {
            let i = x1 * y1;
            return postresult(i);
        }
        case ("/"): {
            let i = x1 / y1;
            return postresult(i);
        }
        case ("%"): {
            let i = x1 % y1;
            return postresult(i);
        }
        default: {
            let i = "unknow value";
            return postresult(i);
        }
    }
}


// result posting function
function postresult(z) {
    let z2 = (e) => {
        let resultValue = document.querySelector('.output')
        resultValue.innerHTML = `Calculated Result = ${e}`;
    };
    z2(z);
}



































































// //creating div for total calculator task
// let mycalc = document.createElement("div");
// mycalc.id = "calculator";
// mycalc.className = "container";
// //creating input fields for Operands and operator using DOM
// let input1 = document.createElement("input");
// input1.id = "input10";
// input1.type = "text";
// mycalc.appendChild(input1);
// let input2 = document.createElement("input");
// input2.id = "input20";
// input2.type = "text";
// mycalc.appendChild(input2);
// let input3 = document.createElement("input");
// input3.id = "input30";
// input3.type = "text";
// mycalc.appendChild(input3);
// let button1 = document.createElement("button");
// button1.id = "button1";
// button1.innerText = "submit";
// mycalc.appendChild(button1);
// //appending whole input fields to main div
// document.body.appendChild(mycalc);
// // data fetch from user
// //onclick event and logic function calling
// document.getElementById("button1").onclick = () => {
//     var operand_1 = document.getElementById("input10").value;
//     var operator = document.getElementById("input20").value;
//     var operand_2 = document.getElementById("input30").value;
//     calculator(operator, operand_1, operand_2);
// }
// //calculator logic amd result function calling
// function calculator(operator, operand_1, operand_2) {
//     switch (operator) {
//         case ("+"): {
//             let x = operand_1 + operand_2;
//             return postresult(x);
//         }
//         case ("-"): {
//             let x = operand_1 - operand_2;
//             return postresult(x);
//         }
//         case ("*"): {
//             let x = operand_1 * operand_2;
//             return postresult(x);
//         }
//         case ("/"): {
//             let x = operand_1 / operand_2;
//             return postresult(x);
//         }
//         case ("%"): {
//             let x = operand_1 % operand_2;
//             return postresult(x);
//         }
//         default: {
//             let x = "unknow value";
//             return postresult(x);
//         }
//     }
// }
// // result posting function
// function postresult(result) { console.log(result) }

// let z= 1 + 1;
// console.log(z);
// var initiation
// var div1
// var div1a
// var div1arow
// var div1acol

// // DOM content creation
// div1 = document.createElement("div");
// div1.className = "container-fluid";
// div1.className += " bg-primary";

// document.body.appendChild(div1);

// div1a = document.createElement("div");
// div1a.className = "container-fluid";
// div1a.className += " m-5";
// // div1a.className += " d-flex justify-content-center"
// div1.appendChild(div1a)

// div1arow = document.createElement("div");
// div1arow = document.createElement("div");
// div1arow.className = "row";

// div1a.appendChild(div1arow)

// div1acol = document.createElement("div");
// div1acol = document.createElement("div");
// div1acol.className = "col";
// div1acol.className += " d-flex align-items-center";
// // div1acol.className += " mt-5";
// div1acol.className += " border border-warning";

// div1arow.appendChild(div1acol);

// let input1 = document.createElement("input");
// input1.id = "input10";
// input1.type = "text";
// div1acol.appendChild(input1);
// let input2 = document.createElement("input");
// input2.id = "input20";
// input2.type = "text";
// div1acol.appendChild(input2);
// let input3 = document.createElement("input");
// input3.id = "input30";
// input3.type = "text";
// div1acol.appendChild(input3);
// let button1 = document.createElement("button");
// button1.id = "button1";
// button1.innerText = "submit";
// div1acol.appendChild(button1);
