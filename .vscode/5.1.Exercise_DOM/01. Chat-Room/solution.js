function solve() {
   let button = document.getElementById("send");
   let input = document.getElementById("chat_input");
   let chat = document.getElementById("chat_messages");
   button.addEventListener("click", e => {
      if (input.value !== "") {
         let div = document.createElement("div");
         div.className = "message my-message";
         div.innerHTML = input.value;
         chat.appendChild(div);
         input.value = "";
      }
   });
}
