const header = document.querySelector(".header");
const container_div = document.querySelector(".container");
const testimonials_div = document.querySelector(".testimonials");
const footer_div = document.querySelector(".footer");
form_container_form = document.querySelector(".form-container");
document.addEventListener("DOMContentLoaded", () => {
    // console.log(form_container_form.scrollHeight);
    const form_Height = form_container_form.scrollHeight;
    const containerPadding = header.scrollHeight;
    // console.log(form_container_form.style);
    form_container_form.style.bottom = `-${form_Height / 2}px`;
    container_div.style.paddingTop = `${containerPadding}px`;
    footer_div.style.paddingTop = `${form_Height / 1.5}px`;
    testimonials_div.style.paddingBottom = `${form_Height}px`;
});