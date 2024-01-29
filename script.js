// Light/Dark Theme
const themeElement = document.querySelector(".themes__toggle");

const toggleDarkTheme = () => themeElement.classList.toggle("themes__toggle--isActive");

const toggleDarkThemeByEnter = (event) => event.key === "Enter" && toggleDarkTheme();

themeElement.addEventListener("keydown", toggleDarkThemeByEnter);
themeElement.addEventListener("click", toggleDarkTheme);