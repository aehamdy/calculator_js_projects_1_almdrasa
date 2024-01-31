// Light/Dark Theme
const themeElement = document.querySelector(".themes__toggle");

const toggleDarkTheme = () => themeElement.classList.toggle("themes__toggle--isActive");

const toggleDarkThemeByEnter = (event) => event.key === "Enter" && toggleDarkTheme();

themeElement.addEventListener("keydown", toggleDarkThemeByEnter);
themeElement.addEventListener("click", toggleDarkTheme);

// Logic for calculator

let storedNumber = "";
let currentNumber = "";
let operation = "";

const resultElement = document.querySelector(".calc__result");
const keyElements = document.querySelectorAll("[data-type]");

const updateScreen = (value) => {
    resultElement.innerText = !value ? "0" : value;
};

const numberButtonHandler = (value) => {
    if (value === "." && currentNumber.includes(".")) return;
    if (value === "0" && !currentNumber) return;

    currentNumber += value;
    updateScreen(currentNumber);
};

const resetButtonHandler = () => {
    storedNumber = "";
    currentNumber = "";
    operation = "";
    updateScreen(currentNumber);
}

const deleteButtonHandler = () => {
    if (!currentNumber || currentNumber === "0") return;

    if (currentNumber.length === 1) {
        currentNumber = "";
    } else {
        currentNumber = currentNumber.substring(0, currentNumber.length-1);
    }

    updateScreen(currentNumber);
}

const keyElementsHandler = (element) => {
    element.addEventListener("click", () => {
        const type = element.dataset.type;

        if (type === "number") {
            numberButtonHandler(element.dataset.value);
        } else if (type === "operation") {
            switch (element.dataset.value) {
                case "c":
                    resetButtonHandler();
                    break
                case "Backspace":
                    deleteButtonHandler();
                    break;
            }
        }
    });
};

keyElements.forEach(keyElementsHandler);