const translations = {
    es: {
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto"
    },
    en: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
    },
    de: {
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt"
    }
};

function updateTexts(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("languageSelector");
    if (selector) {
        updateTexts(selector.value); // Traduce al cargar
        selector.addEventListener("change", () => {
            updateTexts(selector.value);
        });
    }
});
