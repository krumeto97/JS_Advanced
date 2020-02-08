function solve() {
    const template = x => `visited ${x} times`;
    const affiliateLinks = {
        "SoftUni": 1,
        "Google": 2,
        "YouTube": 4,
        "Wikipedia": 4,
        "Gmail": 7,
        "stackoverflow": 6
    }
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("linkCta")) {
            e.target.parentNode.querySelector(".linkOut")
                //.nextElementSibling
                .innerHTML = template(affiliateLinks[e.target.textContent.trim()]++);
        }
    });
}
solve();