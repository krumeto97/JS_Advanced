function solve() {
   let button = document.querySelector("button");
   let items = document.querySelectorAll("tbody tr");
   button.addEventListener("click", e => {
      let select = document.querySelectorAll(".select");
      for (let i = 0; i < select.length; i++) {
         select[i].classList.remove("select");
      }
      let input = document.querySelector("input");
      for (let i = 0; i < items.length; i++) {
         let childs = items[i].childNodes;
         console.log(input.value);
         for (let j = 1; j < childs.length; j += 2) {
            if (childs[j].textContent.includes(input.value)) {
               childs[j].parentElement.className = "select";
               //items[i].className = "select";
               break;
            }
         }
      }

      input.value = "";
   });
}  