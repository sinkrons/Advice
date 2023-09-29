const adviceElement = document.querySelector(".advice");
const adviceIdElement = document.querySelector(".advice-id");
const generateBtn = document.querySelector(".generate-button");

generateBtn.addEventListener("click", fetchAdvice);

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const adviceId = data.slip.id;
      const advice = data.slip.advice;
      adviceElement.textContent = '"' + advice + '"';
      adviceIdElement.textContent = "ADVICE #" + adviceId;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
