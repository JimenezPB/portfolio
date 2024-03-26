const defaultColor = "blue"
const defaultStyle = "dark"
const defaultTheme = "blue-theme-dark"

window.addEventListener("DOMContentLoaded", async () => {
    const body = document.getElementById("body");

    const userPreferredColor = localStorage.getItem("color") || defaultColor;
    const userPreferredStyle = localStorage.getItem("style") || defaultStyle;

    await changeTheme(userPreferredStyle, userPreferredColor);
});

function getTheme(themes, color, style){
    return themes[color][style];
}

async function fetchThemes() {
    const response = await fetch(`assets/themes/themes.json`);
    return response.json();
}

function setColorPreference(color) {
    localStorage.setItem("color", color);
    location.reload();
}

function setStylePreference(style) {
    localStorage.setItem("style", style);
    location.reload();
}

function changeStyle(userPreferredStyle) {
    const sun = document.getElementById("sun-icon");
    const moon = document.getElementById("moon-icon");
  
    if (userPreferredStyle === "ligth") {
      moon.className = "option";
      sun.className = "hide-option";
    } else {
      sun.className = "option";
      moon.className = "hide-option";
    }
  }

async function changeTheme(style, color){
    const themes = await fetchThemes();
    const className = getTheme(themes, color, style);

    body.className = className ?? defaultTheme
}