document.getElementById("getAdvice").addEventListener("click", getadvice);

function getadvice() {
  fetch("https://api.api-ninjas.com/v1/advice")
    .then(response => response.json())
    .then(data => {
      document.getElementById("advice").textContent = data.setup + " - " + data.punchline;
    })
    .catch(error => {
      console.error("Error fetching advice:", error);
    });
}