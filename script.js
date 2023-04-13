const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.screen');
const themes = document.querySelectorAll('[name="theme"]');

let equation = "";

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        if(button.innerHTML === "="){
            let evaluatedValue = eval(equation);
            if(evaluatedValue == "Infinity" || evaluatedValue == "-Infinity" ){
                display.value = "Cannot divide by zero"
            } else {
                display.value = evaluatedValue;
                equation = "";
            }
            console.log("1st if statement");
        } else if(button.innerHTML === "DEL"){
            equation = equation.slice(0,-1);
            display.value = equation;
            console.log("2nd if statement");
        } else if(button.innerHTML === "RESET"){
            equation = "";
            display.value = "";
            console.log("3rd if statement");
        } else if(button.innerHTML === "-" || button.innerHTML === "+" || button.innerHTML === "/" || button.innerHTML === "x"){
            if(equation === ""){
                equation = "0".concat(button.innerHTML);
                display.value = equation;
            } else if(equation[equation.length-1] === "/" || equation[equation.length-1] === "x" || equation[equation.length-1] === "-" || equation[equation.length-1] === "+"){
                equation = equation.slice(0,-1);
                equation += button.innerHTML;
                display.value=equation;
                console.log("inside  operator else if", equation);
            } else if(button.innerHTML === "x"){
                equation += "*";
                display.value = equation;
            } else{
                equation += button.innerHTML;
                display.value=equation;
                console.log("inside else part of operator");
            }
        }
        else {
            equation += button.innerHTML;
            display.value = equation;
            console.log("else statement: "+ equation);
        }
    })
})

// Store theme
themes.forEach(theme=>{
    theme.addEventListener('click', ()=>{
        localStorage.setItem('theme', theme.id);
    })
})

// Set theme
function setTheme(){
    const storedTheme = localStorage.getItem("theme");
    themes.forEach(theme=>{
        if(theme.id === storedTheme){
            theme.checked = true;
        }
    })
}

document.onload = setTheme();
