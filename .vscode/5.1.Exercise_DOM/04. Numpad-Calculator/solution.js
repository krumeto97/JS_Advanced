function solve() {
    const keys = document.querySelector(".keys");
    const output = document.querySelector("#expressionOutput");
    const clearButton = document.querySelector(".clear");
    const result = document.querySelector("#resultOutput");
    const operators = ["+", "-", "/", "*"];
    keys.addEventListener("click", ({ target: { value } }) => {
        if (!value) {
            return;
        }
        if (operators.includes(value)) {
            output.innerHTML = output.innerHTML + ` ${value} `;
            return;
        }
        output.innerHTML = output.innerHTML + value;
        console.log(value);
    });

    clearButton.addEventListener("click", e => {
        output.innerHTML = "";
        result.innerHTML = "";
    })
}