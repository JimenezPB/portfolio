const defaultColor = "blue";
const defaultStyle = "dark";
const defaultTheme = "blue-theme-dark";

window.addEventListener("DOMContentLoaded", async () => {
  const body = document.getElementById("body");
  const userPreferredColor = localStorage.getItem("color") || defaultColor;
  const userPreferredStyle = localStorage.getItem("style") || defaultStyle;

  changeStyle(userPreferredStyle);

  const themes = await fetchThemes(userPreferredColor);
  const className = getTheme(themes, userPreferredColor, userPreferredStyle);

  body.className = className ?? defaultTheme;
});

function getTheme(themes, color, style) {
  return themes[color][style];
}

async function fetchThemes() {
  const response = await fetch(`assets/themes/themes.json`);
  return response.json();
}

function setColorPreference(color) {
  localStorage.setItem("color", color);
}

function setStylePreference(style) {
  localStorage.setItem("style", style);
  changeStyle(style);
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

function showColorPalette() {
  const palette = document.getElementById("color-palette");

  if (palette.className === "palette-hidden") {
    palette.className = "palette";
  } else {
    palette.className = "palette-hidden";
  }
}
