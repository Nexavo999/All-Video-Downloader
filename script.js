function toggleFAQ(questionElement) { /* ... (FAQ function remains the same) */ }

function downloadVideo() {
    const videoUrl = document.getElementById("videoUrl").value;
    const messageDiv = document.getElementById("download-message");
    const progressContainer = document.getElementById("progress-container");
    const progressBar = document.getElementById("progress-bar");
    const downloadOptions = document.getElementById("download-options");
    const mainDownloadButton = document.getElementById("mainDownloadButton");

    if (videoUrl.trim() === "") {
        displayMessage("Please enter a video URL.", "red");
        return;
    }

    if (!videoUrl.startsWith("http://") && !videoUrl.startsWith("https://")) {
        displayMessage("Invalid URL. Please enter a valid URL.", "red");
        return;
    }

    messageDiv.style.display = "none"; // Hide previous messages
    downloadOptions.style.display = "none";
    progressContainer.style.display = "block";
    progressBar.style.width = "0%"; // Reset progress
    mainDownloadButton.disabled = true;

    const apiUrl = `https://api.paxsenix.biz.id/dl/aio?url=${encodeURIComponent(videoUrl)}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: { 'accept': '*/*' }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        progressContainer.style.display = "none"; // Hide progress bar
        mainDownloadButton.disabled = false;
        if (data.ok) {
            if (data.url && data.url.length > 0) {
                downloadOptions.innerHTML = ""; // Clear previous options
                data.url.forEach(item => {
                    const button = document.createElement("button");
                    button.classList.add("quality-button");
                    button.textContent = item.quality || "Unknown Quality";
                    button.onclick = () => window.open(item.url, '_blank');
                    downloadOptions.appendChild(button);
                });
                downloadOptions.style.display = "block";
            } else {
                displayMessage("No download links found.", "orange");
            }
        } else {
            displayMessage(data.message || "An error occurred.", "red");
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        displayMessage("An error occurred while fetching the download links.", "red");
        progressContainer.style.display = "none";
        mainDownloadButton.disabled = false;
    });
}

function displayMessage(message, color) {
    const messageDiv = document.getElementById("download-message");
    messageDiv.textContent = message;
    messageDiv.style.color = color;
    messageDiv.style.display = "block";
}
