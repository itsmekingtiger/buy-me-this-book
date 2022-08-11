console.log("init");
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

function asList(data) {
    let strings = [];

    for (const key in data) {
        strings.push(data[key]);
    }

    return strings;
}

function byMeThisBook() {
    const host = window.location.host;

    switch (host) {
        case Host.Yes24:
            return yes24()

        default:
            console.log(host);
            break;
    }
}

function printe() {
    console.log("hehe");
    console.log(byMeThisBook())
}


async function onClicked() {
    // 현재 탭 정보
    const tabs = await browser.tabs.query({ highlighted: true });

    // tabs.forEach(element => {
    //     console.log(element.url);
    // });

    // const data = asList(yes24());

    // browser.navigator.clipboard.writeText(data.join("\t"))

    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];

        try {
            const result = await browser.scripting.executeScript({
                target: {
                    tabId: tab.id
                },
                files: ["src/script.js"]
            });

            // 에러 체크
            console.log(result);
        } catch (error) {
            console.error(`failed to execute script: ${error}`);
        }
    }


    // browser.tabs.executeScript({
    //     code: `console.log('location:', window.location.href);`
    // });

    // browser.windows.getCurrent().then(
    //     w => {
    //         console.log(`windows = ${JSON.stringify(w)}`);
    //         return w;
    //     }
    // ).then(
    //     w => console.log(`windows tabs = ${browser.tabs.get(w.id)}`)
    // )

    // console.log(byMeThisBook());
}

browser.browserAction.onClicked.addListener(onClicked);