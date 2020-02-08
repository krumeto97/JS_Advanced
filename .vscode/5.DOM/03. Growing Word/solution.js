const colorMap = ["#5B88BD", "#A40014", "#8FF897"];

function growingWord() {
  let word = document.querySelector("#exercise p");
  if (word === null) {
    throw new Error("No words for you.");
  }
  let fontSize = window.getComputedStyle(word).fontSize.replace("px", "");
  word.style.color = colorMap[0];
  let ele = colorMap.shift();
  colorMap.push(ele);
  word.style.fontSize = (fontSize === "0" ? "2" : fontSize * 2) + "px";
}