import "./css/contact.css";

const contact = () => {
    let content = document.querySelector("#content");

    let contactCardHolder = document.createElement("div");
    contactCardHolder.setAttribute("id","contact-card-holder");

    // Title card
    let contactTitle = document.createElement("div");
    contactTitle.setAttribute("id","contact-title");
    contactTitle.textContent = "Contact Us";
    contactCardHolder.appendChild(contactTitle);

    contactCardHolder.appendChild(
        addContact("Flutteronderpy",
            "Head Chef",
            "609-309-3357",
            "flutteronderpy@sc.com"
        )
    );

    contactCardHolder.appendChild(
        addContact("Lucky Prophet",
            "Chef",
            "936-638-7007",
            "luckyprophet@sc.com"
        )
    );

    contactCardHolder.appendChild(
        addContact("Yuh Boy Sasuke",
            "HR Cat",
            "929-964-3128",
            "yuhboysasuke@sc.com"
        )
    );

    contactCardHolder.appendChild(
        addContact("Rezzdotexe",
            "CEO",
            "396-451-4863",
            "rezzdotexe@sc.com"
        )
    );

    content.appendChild(contactCardHolder);

}

function addContact(name,desc,phone,mail){
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");

    const contactName = document.createElement("div");
    contactName.classList.add("contact-name");
    contactName.textContent = name;

    const contactDesc = document.createElement("div");
    contactDesc.classList.add("contact-desc");
    contactDesc.textContent = desc;

    const contactNumber = document.createElement("div");
    contactNumber.classList.add("contact-phone");
    contactNumber.textContent = phone;

    const contactMail = document.createElement("div");
    contactMail.classList.add("contact-mail");
    contactMail.textContent = mail;

    contactCard.appendChild(contactName);
    contactCard.appendChild(contactDesc);
    contactCard.appendChild(contactNumber);
    contactCard.appendChild(contactMail);


    return contactCard;
}

export {contact}