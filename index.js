document.getElementById("getAdvice").addEventListener("click", getadvice);

function getadvice() {
  fetch("https://api.api-ninjas.com/v1/advice", {
    method: "GET",
    headers: {
      'X-Api-Key': 'R4E+sacdvnxhAJy6dNl0/w==4UEFvxxh5bPVbrH5'  // 🔑 Replace with your actual API key
    }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("advice").textContent = data.advice;
    })
    .catch(error => {
      console.error("Error fetching advice:", error);
    });
}
