window.addEventListener("DOMContentLoaded", async () => {
    const userPreferredTheme = localStorage.getItem("theme") || "blue";
    const langData = await fetchThemeData(userPreferredTheme);
    updateContent(langData);
});


function updateContent(langData) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.innerHTML = langData[key];
    });
}

async function fetchThemeData(lang) {
    const response = await fetch(`assets/languages/${lang}.json`);
    return response.json();
  }
  