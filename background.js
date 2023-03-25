// console.log("lavda");
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("error creating item:", browser.runtime.lastError);
  } else {
    console.log("item created successfully");
  }
}

browser.menus.create(
  {
    id: "add-pin",
    title: "ScreenPin-AddPin",
    contexts: ["all"],
  },
  onCreated
);

browser.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "updatePopupHTML") {
    const data = message.yCordFinal;
    console.log(data);
    browser.runtime.sendMessage({ action: "sendData", data });
  }
});
browser.menus.onClicked.addListener((info, tab) => {
  browser.tabs.executeScript(tab.id, {
    file: "/content_script.js",
  });
});
