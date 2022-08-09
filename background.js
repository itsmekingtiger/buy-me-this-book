
function onClicked() {
    console.log("hello");
}

browser.browserAction.onClicked.addListener(onClicked);