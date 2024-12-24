const apiUrl = "https://api.paxsenix.biz.id/dl/aio?url=";

async function getVideoInfo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const loadingElement = document.getElementById('loading');
    const formatsContainer = document.querySelector('.formats');

    // Clear previous results
    formatsContainer.innerHTML = '';
    loadingElement.style.display = 'block';

    if (!videoUrl) {
        alert("Please enter a URL");
        loadingElement.style.display = 'none';
        return;
    }

    try {
        const response = await fetch(apiUrl + encodeURIComponent(videoUrl));
        const data = await response.json();

        loadingElement.style.display = 'none';

        if (data.status !== "success" || !data.result || !data.result.video) {
            formatsContainer.innerHTML = '<p>Failed to fetch video details. Please check the URL.</p>';
            return;
        }

        // Display the video title
        formatsContainer.innerHTML = `<h3>${data.result.title}</h3>`;

        // Add buttons for each available quality
        data.result.video.forEach(format => {
            const btn = document.createElement('button');
            btn.textContent = `${format.quality}`;
            btn.onclick = () => downloadVideo(format.url);
            formatsContainer.appendChild(btn);
        });
    } catch (error) {
        console.error(error);
        loadingElement.style.display = 'none';
        formatsContainer.innerHTML = '<p>An error occurred while fetching video details.</p>';
    }
}

function downloadVideo(url) {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = "video.mp4";
    anchor.click();
              }
