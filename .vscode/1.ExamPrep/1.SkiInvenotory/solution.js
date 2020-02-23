function solve() {
   let inputs = document.querySelectorAll("#add-new input")
   let addButton = document.querySelector("#add-new button");
   let ulEle = document.querySelector("#products ul");
   let filterButton = document.querySelector(".filter button");
   let filterInput = document.querySelector("#filter");
   let totalPrice = document.querySelectorAll("h1")[1];
   let myProducts = document.querySelector("#myProducts ul");
   let buyButton = document.querySelectorAll("button")[2];
   //addButton.setAttribute("type", "button");

   addButton.addEventListener("click", (e) => {
      e.preventDefault();

      let newItemLine = document.createElement('li');
      let itemName = document.createElement("span");
      itemName.innerText = inputs[0].value;

      let itemQuantity = document.createElement("strong");
      itemQuantity.innerText = `Available: ${inputs[1].value}`;

      let priceContainer = document.createElement("div");
      let btn = document.createElement("button");
      let itemPrice = document.createElement("strong");
      itemPrice.innerText = Number(inputs[2].value).toFixed(2);
      btn.innerText = "Add to Client's List";
      priceContainer.appendChild(itemPrice);
      priceContainer.appendChild(btn);

      newItemLine.appendChild(itemName);
      newItemLine.appendChild(itemQuantity);
      newItemLine.appendChild(priceContainer);
      ulEle.appendChild(newItemLine);

      btn.addEventListener("click", () => {
         let liE = document.createElement("li");
         liE.innerText = itemName.innerText;
         let strongElement = document.createElement("strong");
         strongElement.innerText = itemPrice.innerText;
         liE.appendChild(strongElement);
         myProducts.appendChild(liE);

         let price = totalPrice.innerText.split(" ")[2];
         let sum = (Number(price) + Number(itemPrice.innerText)).toFixed(2);
         totalPrice.innerText = `Total Price: ${sum}`
         let currentQuantity = Number(itemQuantity.innerText.split(": ")[1].trim());
         currentQuantity--;
         itemQuantity.innerText = `Available: ${currentQuantity}`;
         if (currentQuantity === 0) {
            ulEle.removeChild(newItemLine);
         }
      });

      filterButton.addEventListener("click", () => {
         let filterValue = filterInput.value;
         Array.from(ulEle.children).forEach(el => {
            let productName = el.querySelector("span");
            if (productName.innerHTML.toLowerCase().includes(filterValue.toLowerCase())) {
               el.style.display = "block"
            } else {
               el.style.display = "none"
            }
         });
      });

      buyButton.addEventListener("click", () => {
         myProducts.innerHTML = "";
         totalPrice.innerText = "Total Price: 0.00";
      });
   });


}