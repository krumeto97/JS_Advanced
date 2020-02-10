function solve() {
  let doc = document.getElementById("quizzie");
  let sections = document.getElementsByTagName("section");
  const answers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents"
  ];
  let result = document.querySelector(".results-inner");
  let answeredQuestions = 0;
  let currentSection = 0;
  doc.addEventListener("click", e => {
    if (e.target.className === "answer-text") {
      sections[currentSection].style.display = "none";
      if (answers.includes(e.target.innerHTML)) {
        answeredQuestions++;
      }

      currentSection++;
      if (currentSection < answers.length) {
        sections[currentSection].style.display = "block";
      }
      if (currentSection === 3) {
        document.querySelector("#results").style.display = "block";
        result.innerHTML =
          answeredQuestions === 3
            ? "You are recognized as top JavaScript fan!"
            : `You have ${answeredQuestions} right answers`;
      }
    }
  });
}
