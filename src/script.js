console.log("스크립트!");


const yes24 = () => ({
    Price: document.querySelector(".nor_price > em:nth-child(1)").textContent,
    Title: document.querySelector(".gd_titArea > h2:nth-child(1)").textContent,
    Author: document.querySelector(".gd_auth").textContent.trim(),
    Publisher: document.querySelector(".gd_pub > a:nth-child(1)").textContent.trim(),
    PublishedAt: document.querySelector(".gd_date").textContent.trim(),
});

const asList = (data) => {
    let strings = [];

    for (const key in data) {
        strings.push(data[key]);
    }

    return strings;
};

// https://stackoverflow.com/questions/51805395/navigator-clipboard-is-undefined
function copyToClipboard(textToCopy) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(textToCopy);
    } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            // here the magic happens
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}


const txtData = JSON.stringify(asList(yes24()).join('|'));

copyToClipboard(txtData);
console.log(txtData);