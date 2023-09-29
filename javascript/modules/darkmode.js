export function initDarkMode() {
    const toogle = document.querySelector(".toogle");
    const toogleBtn = toogle === null || toogle === void 0 ? void 0 : toogle.firstElementChild;
    function activeDarkMode() {
        document.documentElement.classList.toggle("dark-theme");
        toogleBtn.classList.toggle("dark-theme");
    }
    toogle === null || toogle === void 0 ? void 0 : toogle.addEventListener("click", activeDarkMode);
}
