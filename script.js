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

const keyElementsHandler = (element) => {
    element.addEventListener("click", () => {
        element.dataset.type === "number" && numberButtonHandler(element.dataset.value);
    });
};

keyElements.forEach(keyElementsHandler);