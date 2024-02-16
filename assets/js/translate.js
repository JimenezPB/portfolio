const defaultLanguage = "es"

window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || defaultLanguage;
  const es = document.getElementById('es');
  const gb = document.getElementById('gb');

  if(userPreferredLanguage === 'es'){
    gb.style.display = 'block';
    es.style.display = 'none';
  }else{
    es.style.display = 'block';
    gb.style.display = 'none';
  }
  const langData = await fetchLanguageData(userPreferredLanguage);

  updateContent(langData);
});

function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = langData[key];
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
