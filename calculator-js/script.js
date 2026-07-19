let display = document.getElementById("display");

function append(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        alert("Error");
    }
}

function calculate() {
    try {
        display.value = Function("return " + display.value)();
    } catch {
        alert("Invalid Expression");
    }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key) || "+-*/().".includes(e.key)) {
        append(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        backspace();
    }
});