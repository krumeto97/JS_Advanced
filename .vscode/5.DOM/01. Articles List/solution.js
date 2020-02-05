function createArticle() {
	let article = document.createElement('article');
	let h3 = document.createElement('h3');
	let p = document.createElement('p');

	let input = document.getElementById('createTitle');
	let content = document.getElementById('createContent');
	let art = document.getElementById('articles');

	if (input.value !== "" && content.value !== "") {
		h3.innerHTML = input.value;
		p.innerHTML = content.value;
		article.appendChild(h3);
		article.appendChild(p);
		art.appendChild(article);
		input.value = "";
		content.value = "";
	}
}

// const keysMap = {
// 	10: function (evt) {
// 		createArticle();
// 	}
// }

// document.addEventListener("DOMContentLoaded", x => {
// 	document.getElementById("createArticleButton").addEventListener("click", createArticle);
// 	document.addEventListener("keypress", function (evt) {
// 		if (typeof keysMap[evt.keyCode] === "function") {    //button handler
// 			keysMap[evt.keyCode](evt);
// 		}
// 	})
// })