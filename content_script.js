let yCordFinal;
const pins = [];
window.addEventListener("contextmenu", function (e) {
  yCordFinal = window.scrollY + e.clientY;
  pins.push(yCordFinal);
  console.log(yCordFinal);
  browser.storage.local.set({data: pins})
  browser.runtime.sendMessage({ action: "updatePopupHTML", data: yCordFinal });
});

// const div1 = document.getElementById("tes");
// // const button = document.createElement("button");

// div1.innerHTML += "<button>Hello WOrld</button>";
// button.innerText = "Pin";
// div1.body.appendchild("");

// console.log(document.innerHTML);
// export const name = "hello";
