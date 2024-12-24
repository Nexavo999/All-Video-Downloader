const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const getVideoButton = document.getElementById("getVideoButton");

themeToggle.addEventListener("click", () => {
  const theme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", theme);
  themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
});

function getVideoInfo() {
  const url = document.getElementById("videoUrl").value;
  if (!url) {
    alert("Please enter a valid video URL");
    return;
  }

  document.getElementById("loading").classList.remove("hidden");
  fetch(`https://api.paxsenix.biz.id/dl/aio?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("loading").classList.add("hidden");
      if (data.url && data.url.length > 0) {
        showVideoDetails(data);
      } else {
        alert("No data found for the provided URL.");
      }
    })
    .catch(error => {
      document.getElementById("loading").classList.add("hidden");
      alert("An error occurred while fetching video data.");
    });
}

function showVideoDetails(data) {
  document.getElementById("videoDetails").classList.remove("hidden");

  const qualitiesContainer = document.getElementById("qualities");
  qualitiesContainer.innerHTML = "";

  data.url.forEach((item, index) => {
    const qualityButton = document.createElement("button");
    qualityButton.textContent = item.quality;
    qualityButton.onclick = () => window.open(item.url, "_blank");
    qualitiesContainer.appendChild(qualityButton);
  });
}
