function solve() {
    let optionList = document.querySelectorAll("#selectMenuTo")[0];
    let button = document.querySelector("button");
    let number = document.querySelector("#input");

    const mathObj = {
        binary: (number) => (Number(number)).toString(2),
        hexademical: (number) => (Number(number)).toString(16).toUpperCase()
    }
    optionList.innerHTML =
        `<option selected value=""></option>
<option value="hexademical">Hexadecimal</option>
<option value="binary">Binary</option>`
    button.addEventListener("click", () => {
        let result = mathObj[optionList.value](number.value);
        document.getElementById("result").value = result;
    });

}