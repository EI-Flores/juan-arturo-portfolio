
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("light-mode")) {
        body.classList.replace("light-mode", "dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.replace("dark-mode", "light-mode");
        localStorage.setItem("theme", "light");
    }
}

window.onload = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme + "-mode");
};
