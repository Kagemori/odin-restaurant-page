console.log("Start of Index.js");

import { home } from "./home";

home();

let navHome = document.querySelector("#home");
let navMenu = document.querySelector("#menu");
let navContact = document.querySelector("#contact");
let content = document.querySelector("#content");

navHome.addEventListener('click', () => {
    while(content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
    home();
})