window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "en";
  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData);
});

function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = langData[key];
  });
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

// Function to change language
async function changeLanguage(lang) {
  setLanguagePreference(lang);

  const langData = await fetchLanguageData(lang);
  updateContent(langData);
}

async function fetchLanguageData(lang) {
  const response = await fetch(`assets/languages/${lang}.json`);
  return response.json();
}
