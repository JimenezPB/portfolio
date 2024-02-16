const defaultColor = "blue"
const defaultStyle = "dark"
const defaultTheme = "blue-theme-dark"

window.addEventListener("DOMContentLoaded", async () => {
    const body = document.getElementById("body");

    const userPreferredColor = localStorage.getItem("color") || defaultColor;
    const userPreferredStyle = localStorage.getItem("style") || defaultStyle;

    const themes = await fetchThemes(userPreferredColor);
    const className = getTheme(themes, userPreferredColor, userPreferredStyle);

    body.className = className ?? defaultTheme
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