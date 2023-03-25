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

browser.menus.onClicked.addListener((info, tab) => {
  browser.tabs.executeScript(tab.id, {
    file: "/content_script.js",
  });
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    // Inject the JavaScript code into the active tab's content process
    browser.tabs.executeScript(tabs[0].id, {
      code: "var myElement = document.getElementById('tes'); console.log(myElement);",
    });
  });
});

browser.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "updatePopupHTML") {
    browser.tabs.executeScript(sender.tab.id, {
      file: "/popup.js",
    });
  }
});
