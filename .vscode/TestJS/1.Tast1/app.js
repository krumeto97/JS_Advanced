function solve() {
   let inputs = document.querySelectorAll("p input");
   let textArea = document.querySelector("p textarea");
   let createButton = document.querySelector("button");
   let articles = document.querySelector("main section");

   createButton.addEventListener("click", (e) => {
      e.preventDefault();
      let article = document.createElement("article");
      let h1 = document.createElement("h1");
      let categoryContent = document.createElement("p");
      let creator = document.createElement("p");
      let strongCategory = document.createElement("strong");
      let strongCreator = document.createElement("strong");
      let contentP = document.createElement("p")
      let divForButtons = document.createElement("div");
      let buttonDeleteCreate = document.createElement("button");
      let buttonArchiveCreate = document.createElement("button");
      let ulArchive = document.querySelector("ul");
      let liElement = document.createElement("li");

      let author = inputs[0].value;
      let title = inputs[1].value;
      let category = inputs[2].value;
      let content = textArea.value;

      h1.innerText = title;

      strongCategory.innerText = category;
      categoryContent.innerText = "Category:";
      categoryContent.appendChild(strongCategory);

      creator.innerText = "Creator:";
      strongCreator.innerText = author;
      creator.appendChild(strongCreator);

      contentP.innerText = content;

      divForButtons.className = "buttons"
      buttonDeleteCreate.className = "btn delete";
      buttonDeleteCreate.textContent = "Delete";

      buttonArchiveCreate.className = "btn archive";
      buttonArchiveCreate.textContent = "Archive";

      divForButtons.appendChild(buttonDeleteCreate);
      divForButtons.appendChild(buttonArchiveCreate);

      article.appendChild(h1);
      article.appendChild(categoryContent);
      article.appendChild(creator);
      article.appendChild(contentP);
      article.appendChild(divForButtons);
      articles.appendChild(article);

      buttonArchiveCreate.addEventListener("click", () => {
         liElement.innerText = title;
         ulArchive.appendChild(liElement);
         let arrayOfLi = document.querySelector("ul");
         var i, switching, b, shouldSwitch;
         switching = true;
         /* Make a loop that will continue until
         no switching has been done: */
         while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            b = arrayOfLi.getElementsByTagName("Li");
            // Loop through all list items:
            for (i = 0; i < (b.length - 1); i++) {
               // Start by saying there should be no switching:
               shouldSwitch = false;
               /* Check if the next item should
               switch place with the current item: */
               if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                  /* If next item is alphabetically lower than current item,
                  mark as a switch and break the loop: */
                  shouldSwitch = true;
                  break;
               }
            }
            if (shouldSwitch) {
               /* If a switch has been marked, make the switch
               and mark the switch as done: */
               b[i].parentNode.insertBefore(b[i + 1], b[i]);
               switching = true;
            }
         }
         articles.removeChild(article);
      });
      buttonDeleteCreate.addEventListener("click", () => {
         articles.removeChild(article);
      })
   })
}