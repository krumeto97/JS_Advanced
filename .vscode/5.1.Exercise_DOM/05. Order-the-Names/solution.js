function solve() {
    let input = document.querySelector("input");
    const button = document.querySelector("button");

    button.addEventListener("click", e => {
        let val = input.value;
        val = val.split(" ").join(", ");
        let char = val.charCodeAt(0);
        const li = document.querySelectorAll("li")[char - 65];
        if (li.innerHTML.length > 0) {
            li.innerHTML += `, ${val}`;
        } else {
            li.innerHTML = val;
        }
        input.value = "";
    });
}