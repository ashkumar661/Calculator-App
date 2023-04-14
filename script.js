const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.screen');
const themes = document.querySelectorAll('[name="theme"]');

let equation = "";

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        if(button.innerHTML === "="){
            equation = eval(equation.replace(/x/g,'*'));
            if(evaluatedValue == "Infinity" || evaluatedValue == "-Infinity" ){
                display.value = "Cannot divide by zero"
                equation = "";
            } 
            display.value = equation;
        } else if(button.innerHTML === "DEL"){
            equation = equation.slice(0,-1);
            display.value = equation;
        } else if(button.innerHTML === "RESET"){
            equation = "";
            display.value = "";
        } else if(button.innerHTML === "-" || button.innerHTML === "+" || button.innerHTML === "/" || button.innerHTML === "x"){
            if(equation === ""){
                equation = "0".concat(button.innerHTML);
                display.value = equation;
            } else if(equation[equation.length-1] === "/" || equation[equation.length-1] === "x" || equation[equation.length-1] === "-" || equation[equation.length-1] === "+"){
                equation = equation.slice(0,-1);
                equation += button.innerHTML;
                display.value=equation;
            } else if(button.innerHTML === "x"){
                equation += button.innerHTML;
                display.value = equation;
            } else{
                equation += button.innerHTML;
                display.value=equation;
            }
        }
        else {
            equation += button.innerHTML;
            display.value = equation;
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
