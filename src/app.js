const header = document.querySelector(".header");
const container_div = document.querySelector(".container");
document.addEventListener("DOMContentLoaded", () => {
    const containerPadding = header.scrollHeight;
    container_div.style.paddingTop = `${containerPadding}px`;
});