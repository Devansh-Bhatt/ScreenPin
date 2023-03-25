browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "sendData") {
    console.log("In Popup.js");
    var data = message.data;
    const div = document.querySelector(".containerdiv");

    const button = document.createElement("button");
    button.innerHTML = data;
    div.appendChild(button);
  }
});

console.log("OUtside the runtime functom");
