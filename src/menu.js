import "./css/menu.css";

const menu = () => {
    let content = document.querySelector("#content");

    let menuCardHolder = document.createElement("div");
    menuCardHolder.setAttribute("id","menu-card-holder");

    // Title card
    let menuTitle = document.createElement("div");
    menuTitle.setAttribute("id","menu-title");
    menuTitle.textContent = "Menu";

    // Appetizer head
    let appetizerHead = document.createElement("div");
    appetizerHead.classList.add("menu-head");
    appetizerHead.textContent = "Appetizers";

    // Main dishes
    let mainHead = document.createElement("div");
    mainHead.classList.add("menu-head");
    mainHead.textContent = "Main Course";

    // Desserts
    let dessertHead = document.createElement("div");
    dessertHead.classList.add("menu-head");
    dessertHead.textContent = "Desserts";

    // Drinks
    let drinkHead = document.createElement("div");
    drinkHead.classList.add("menu-head");
    drinkHead.textContent = "Drinks";

    // Appetizers
    appetizerHead.appendChild(
        addMenuItem("Nachos",
            "Corn chips made fresh, can be served with salsa & queso.",
            "$6.99")
    );

    appetizerHead.appendChild(
        addMenuItem("Breadsticks",
            "Freshly baked breadsticks with dippings available.",
            "$4.99"
        )
    );

    appetizerHead.appendChild(
        addMenuItem("Mozzarella Sticks",
            "Served with Marinara sauce.",
            "$14.99"
        )
    );

    // Mains
    mainHead.appendChild(
        addMenuItem("Meatloaf",
            "Ground beef and turkey, with celery, eggs, breadcrumbs, shiitake mushrooms, onions, minced garlic topped with cream of mushroom.",
            "$11.99"
        )
    );

    mainHead.appendChild(
        addMenuItem("Classic Cheese Burger",
            "Beef burger with american cheddar and additional toppings.",
            "$6.99"
        )
    );

    mainHead.appendChild(
        addMenuItem("Bring Your Own Meat",
            "You bring it, we fry it. We'll cook your own meat you bring.",
            "Service Price Varies"
        )
    )

    // Desserts
    dessertHead.appendChild(
        addMenuItem("Mango Pudding",
            "Made with fresh mangoes.",
            "$9.99"
        )
    );

    dessertHead.appendChild(
        addMenuItem("Tiramisu",
            "Made with Mascarpone Cheese, eggs, sugar Marsala wine, rum and cocoa powder.",
            "$8.99"
        )
    );

    dessertHead.appendChild(
        addMenuItem("Cookies & Cream Ice Cream",
            "Freshly made Cookies and Cream Ice Cream made with oreo cookies.",
            "$4.99"
        )
    );

    // Beverages
    drinkHead.appendChild(
        addMenuItem("Fountain Soda",
            "Choose from a selection of drinks and sodas.",
            "$3.99"
        )
    );

    drinkHead.appendChild(
        addMenuItem("Bottled Drinks",
            "Drinks vary daily.",
            "Price Varies"
        )
    );

    drinkHead.appendChild(
        addMenuItem("Alcoholic Drinks",
            "Choose from a selection of alcoholic beverages.",
            "Price Varies"
        )
    );

    menuCardHolder.appendChild(menuTitle);
    menuCardHolder.appendChild(appetizerHead);
    menuCardHolder.appendChild(mainHead);
    menuCardHolder.appendChild(dessertHead);
    menuCardHolder.appendChild(drinkHead);

    content.appendChild(menuCardHolder);
}

function addMenuItem(name,desc,price){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuName = document.createElement("div");
    menuName.classList.add("menu-item-name");
    menuName.textContent = name;

    const menuDesc = document.createElement("div");
    menuDesc.classList.add("menu-item-desc");
    menuDesc.textContent = desc;

    const menuPrice = document.createElement("div");
    menuPrice.classList.add("menu-item-price");
    menuPrice.textContent = price;

    menuItem.appendChild(menuName);
    menuItem.appendChild(menuDesc);
    menuItem.appendChild(menuPrice);

    return menuItem;
}


export {menu}