// icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// icon toggle
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

// initial theme check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};

// manual theme switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

// call switch theme on clicking buttons
sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});

//invoke theme check on initial load
themeCheck();

// mobile button
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})