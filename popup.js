const div = document.querySelector(".containerdiv");
const indx = 0
browser.storage.local.get("data").then((result) => {
const myData = result.data;

myData.forEach(e=> {
  const button = document.createElement("button");
  indx++
  const buttonlist = []
  button.className = "butpin"
  button.innerText = e;
  button.id = indx 
  buttonlist.push(button.id)
  button.addEventListener("click",()=>{
    buttonlist.forEach((b)=>{
      if(button.id===b){
        window.scrollTo(0,e)
      }
    })
    
  })
  div.append(button);  
  
});
});




// browser.runtime.onMessage.addListener((message) => {
//   if (message.action === "updatePopupHTML") {
//     console.log("In Popup.js");
//     var data = message.data;
//     const div = document.querySelector(".containerdiv");

//     const button = document.createElement("button");
//     button.innerHTML = data;
//     div.appendChild(button);
//   }
// });

console.log("Outside the runtime functom");
