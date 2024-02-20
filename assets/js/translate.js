const defaultLanguage = "es"

window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || defaultLanguage;
  
  changeFlag(userPreferredLanguage);

  const langData = await fetchLanguageData(userPreferredLanguage);

  updateContent(langData);
});

function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = langData[key];
  });
}

function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
}

async function changeLanguage(lang) {
  setLanguagePreference(lang);
  changeFlag(lang);

  const langData = await fetchLanguageData(lang);
  updateContent(langData);
}

async function fetchLanguageData(lang) {
  const response = await fetch(`assets/languages/${lang}.json`);
  return response.json();
}

function changeFlag(userPreferredLanguage){
  const es = document.getElementById('es-icon');
  const gb = document.getElementById('gb-icon');

  if(userPreferredLanguage === 'es'){
    gb.className = 'option';
    es.className = 'hide-option';
  }else{
    es.className = 'option';
    gb.className = 'hide-option';
  }
}
