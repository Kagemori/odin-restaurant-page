import "./css/home.css";

const home = () => {
    let content = document.querySelector('#content');

    let homeCardHolder = document.createElement("div");
    homeCardHolder.setAttribute("id","home-card-holder");


    // Title Card
    let titleCard = document.createElement("div");
    titleCard.classList.add("card");
    titleCard.textContent = "The Spicy Meatketeers";

    // Description Card
    let descCard = document.createElement("div");
    descCard.classList.add("card");

    let descHead = document.createElement("div");
    descHead.classList.add("card-header");
    descHead.textContent = "You Bring It, We Fry It";

    let descInfo = document.createElement("div");
    descInfo.classList.add("card-info");
    descInfo.textContent = "Bring you own meats, uncooked ingredients, whatever and we'll fry it for you. Come on down to Spicy Meatketeers for our friendly atmosphere and wholly unique dining experience.";

    descCard.appendChild(descHead);
    descCard.appendChild(descInfo);

    // Hours Card
    let hoursCard = document.createElement("div");
    hoursCard.classList.add("card");

    let hoursHead = document.createElement("div");
    hoursHead.classList.add("card-header");
    hoursHead.textContent = "Hours";

    let hoursInfo = document.createElement("div");
    hoursInfo.classList.add("card-info");
    hoursInfo.textContent = "We're open 24/7! \n Come rain or shine!";

    hoursCard.appendChild(hoursHead);
    hoursCard.appendChild(hoursInfo);

    // Location Card
    let locaCard = document.createElement("div");
    locaCard.classList.add("card");

    let locaHead = document.createElement("div");
    locaHead.classList.add("card-header");
    locaHead.textContent = "Location";

    let locaInfo = document.createElement("div");
    locaInfo.classList.add("card-info");
    locaInfo.textContent = "1234 Aspen Street, Denver, Colorado";

    locaCard.appendChild(locaHead);
    locaCard.appendChild(locaInfo);

    // Append cards to holder and append to main content
    homeCardHolder.appendChild(titleCard);
    homeCardHolder.appendChild(descCard);
    homeCardHolder.appendChild(hoursCard);
    homeCardHolder.appendChild(locaCard);

    content.appendChild(homeCardHolder);
}

export {home};