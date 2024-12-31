const apiUrl = "YOUR_API_ENDPOINT"; // Replace with your API endpoint

document.getElementById('get-info').addEventListener('click', async () => {
    const videoUrl = document.getElementById('video-url').value;
    const resultsDiv = document.getElementById('results');
    const progressBar = document.getElementById('progress-bar');
    const progress = document.getElementById('progress');
    const videoThumbnail = document.getElementById('video-thumbnail');
    const videoTitle = document.getElementById('video-title');
    const downloadOptions = document.getElementById('download-options');
    const qualityButtons = document.getElementById('quality-buttons');

    resultsDiv.classList.add('hidden'); // Hide results initially
    downloadOptions.classList.add('hidden');
    qualityButtons.innerHTML = ''; // Clear previous buttons
    progressBar.classList.remove('hidden');
    progress.style.width = '0%';

    try {
        const response = await fetch(apiUrl + encodeURIComponent(videoUrl), {
            onDownloadProgress: (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                progress.style.width = `${percentCompleted}%`;
            }
        });

        const data = await response.json();
        progressBar.classList.add('hidden');

        if (data.error) {
            alert(data.error); // Simple alert for errors
            return;
        }

        videoThumbnail.src = data.thumbnail || '';
        videoTitle.textContent = data.title || 'N/A';
        resultsDiv.classList.remove('hidden');

        if (data.formats && data.formats.length > 0) {
            downloadOptions.classList.remove('hidden');
            data.formats.forEach(format => {
                const button = document.createElement('button');
                button.textContent = `${format.quality} (${format.format})`;
                button.classList.add('quality-button');
                button.addEventListener('click', () => {
                    // Start download
                    const a = document.createElement('a');
                    a.href = format.url;
                    a.download = data.title ? `${data.title}.${format.format || 'mp4'}` : 'video.mp4';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                });
                qualityButtons.appendChild(button);
            });
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred.");
        progressBar.classList.add('hidden');
    }
});
