function solve() {
   let products = [];
   let sum = 0;
   let buttons = document.querySelectorAll(".add-product");
   let textArea = document.querySelector("textarea");
   let checkOut = document.querySelector(".checkout");
   document.addEventListener("click", e => {
      if (e.target.classList.contains("add-product")) {
         let parentNode = e.target.parentNode.parentNode;
         let product = parentNode.firstChild.nextElementSibling.nextElementSibling.firstElementChild.innerHTML;
         let money = parentNode.lastElementChild.textContent;
         if (!products.includes(product)) {
            products = [...products, product];
            sum = sum + Number(money);
            textArea.innerHTML += `Added ${product} for ${money} to the cart.\n`;
         }
      }
   });
   checkOut.addEventListener("click", e => {
      textArea.innerHTML += `You bought ${products} for ${Math.round((sum + Number.EPSILON) * 100) / 100

         }.`;
      buttons.forEach(e => e.disabled = true)
   });
}