console.log("Start of Index.js");

import "./css/styles.css";

import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

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
});

navMenu.addEventListener('click', () => {
    while(content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
    menu();
});

navContact.addEventListener('click', () => {
    while(content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
    contact();
});