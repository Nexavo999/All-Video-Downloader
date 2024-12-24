const apiUrl = "https://api.paxsenix.biz.id/dl/aio?url=";

async function getVideoInfo() {
    const videoUrl = document.getElementById("videoUrl").value;
    const loadingElement = document.getElementById("loading");
    const formatsContainer = document.querySelector(".formats");

    // Clear previous results
    formatsContainer.innerHTML = "";
    loadingElement.style.display = "block";

    if (!videoUrl) {
        alert("Please enter a valid video URL.");
        loadingElement.style.display = "none";
        return;
    }

    try {
        // Fetch video details from API
        const response = await fetch(apiUrl + encodeURIComponent(videoUrl));
        const data = await response.json();

        loadingElement.style.display = "none";

        // Check if response is valid
        if (!data.ok || !data.url || data.url.length === 0) {
            formatsContainer.innerHTML = `<p>Could not fetch video details. Please check the URL and try again.</p>`;
            return;
        }

        // Display the available qualities
        formatsContainer.innerHTML = "<h3>Available Qualities:</h3>";
        data.url.forEach((format) => {
            const btn = document.createElement("button");
            btn.textContent = format.quality;
            btn.onclick = () => downloadVideo(format.url);
            formatsContainer.appendChild(btn);
        });
    } catch (error) {
        console.error("Error fetching video details:", error);
        loadingElement.style.display = "none";
        formatsContainer.innerHTML = `<p>An error occurred. Please try again later.</p>`;
    }
}

function downloadVideo(videoUrl) {
    const anchor = document.createElement("a");
    anchor.href = videoUrl;
    anchor.download = "video.mp4"; // Default filename for the download
    anchor.click();
}
