browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("In Popup.js");
  if (message.action === "Data") {
    var data = message.pins;
  }
  const div = document.querySelector(".containerdiv");

  for (let i = 0; i < data.length; i++) {
    div.appendChild("Hello World " + i);
  }
});

console.log("OUtside the runtime functom");
