let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key.match(/[0-9+\-*/.]/)) {
        handleInput(e.key);
    } else if (e.key === 'Enter') {
        handleInput('=');
    } else if (e.key === 'Backspace') {
        handleInput('DEL');
    } else if (e.key.toUpperCase() === 'C') {
        handleInput('AC');
    }
});

function handleInput(key) {
    if (key === '=') {
        try {
            string = eval(string);
        } catch (error) {
            string = "Error";
        }
        input.value = string;
    } else if (key === 'AC') {
        string = "";
        input.value = string;
    } else if (key === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += key;
        input.value = string;
    }
}
