document.getElementById("display").style.textAlign = 'right';
let screen = document.getElementById("display");



function addToScreen(value){
    let lastChar = screen.value.slice(-1);
    if (screen.value === "Infinity"){
        screen.value = value;
        return;
    }
    if (screen.value === "Error"){
        screen.value = value;
        return;
    }
    if (lastChar === '.'){
        if (value === '.') {
            screen.value = screen.value.slice(0, -1);
        }
    }
    if (screen.value === ''){
        if (["+", "x", "÷"].includes(value)){
            screen.value = '';
            return;
        }
    }
    if (["+", "-", "x", "÷"].includes(value)) {
        if (["+", "-", "x", "÷"].includes(lastChar)) {
            screen.value = screen.value.slice(0, -1) + value
        }
        else {
            screen.value += value
        }
    }
    else {
        screen.value += value
    }
}
    
function calculate(){
    if (screen.value === ''){
        screen.value = '';
    }
    else {
        try {
            screen.value = eval(screen.value.replaceAll("x", "*").replaceAll("\u00F7", "/").replaceAll("^", "**"))
        }
        catch (error) {
            screen.value = "Error";
        }
    }
    
}

function clearAll(){
    document.getElementById("display").value ="";
}

function squareRoot(){
    if (screen.value === ''){
        screen.value = '';
    }
    else {screen.value = Math.sqrt(Number(screen.value));}
}

function goBack(){
    screen.value = screen.value.slice(0, -1);
}

document.addEventListener("keydown", function(event){
    let key = event.key;

    if (!isNaN(key) || ['+', '-'].includes(key) || key === '.'){
        addToScreen(key);
    }
    else if (key === "Enter"){
        calculate();
    }
    else if (key === "Backspace"){
        goBack();
    }
    else if (key === "Escape"){
        clearAll();
    }
    else if (key === "*"){
        addToScreen('x')
    }
    else if (key === "/"){
        addToScreen('÷')
    }
});





function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close dropdown when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Apply saved color on page load÷
window.onload = function() {
  const savedColor = localStorage.getItem("themeColor");
  if (savedColor) {
    document.documentElement.style.setProperty("--seccondary-color", savedColor);
  }
};

function changeColor(color) {
  // Set variable
  document.documentElement.style.setProperty("--seccondary-color", color);

  // Save to localStorage
  localStorage.setItem("themeColor", color);
}
