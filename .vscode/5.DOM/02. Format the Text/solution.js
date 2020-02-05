function solve() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  if (input === null || output === null) {
    throw new Error("Something is wrong..");
  }

  let sentences = input.innerHTML
    .split(".")
    .filter(x => x !== "");
  for (let i = 0; i < sentences.length; i += 3) {
    let p = document.createElement("p");
    let str = "";
    p.innerHTML = `${sentences[i]}.${sentences[i + 1]}.${sentences[i + 2]}.`;
    output.appendChild(p);
  }
}