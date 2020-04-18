function solve() {
   const tBody = document.querySelector("tbody")
   const tRows = document.querySelectorAll("tbody tr");
   tBody.addEventListener("click", (e) => {
      //const trRef = e.target.closest("tr");
      Array.from(tRows).forEach(r => {
         if (r !== e.target.parentNode) {
            r.style.cssText = '';
         }
      });
      e.target.parentNode.style.cssText = e.target.parentNode.style.cssText ? '' : 'background-color: #413f5e;';
      //e.target.parentNode.style.backgroundColor = e.target.parentNode.style.backgroundColor ? '' : '#413f5e';

   })
}