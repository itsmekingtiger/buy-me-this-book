

const Attr = {
    Price: "price",
    Title: "title",
    Author: "author",
    Publisher: "publisher",
    PublishedAt: "publishedAt",
};

Object.freeze(Attr);

const Host = {
    Yes24: "yes24.com",
};

Object.freeze(Host);

function yes24() {
    return {
        Price: document.querySelector(".nor_price > em:nth-child(1)").textContent,
        Title: document.querySelector(".gd_titArea > h2:nth-child(1)").textContent,
        Author: document.querySelector(".gd_auth").textContent.trim(),
        Publisher: document.querySelector(".gd_pub > a:nth-child(1)").textContent.trim(),
        PublishedAt: document.querySelector(".gd_date").textContent.trim(),
    }
}



function byMeThisBook() {
    const host = window.location.host;

    switch (host) {
        case Host.Yes24:
            return yes24()

        default:
            break;
    }
}
