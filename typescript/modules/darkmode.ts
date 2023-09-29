export function initDarkMode() {
  const toogle: HTMLElement = document.querySelector(".toogle") as HTMLElement;
  const toogleBtn: HTMLElement = toogle?.firstElementChild as HTMLElement;

  function activeDarkMode(): void {
    document.documentElement.classList.toggle("dark-theme");
    toogleBtn.classList.toggle("dark-theme");
  }

  toogle?.addEventListener("click", activeDarkMode);
}
