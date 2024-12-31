document.getElementById('downloadButton').addEventListener('click', async () => {
    const progressBarContainer = document.getElementById('progressBarContainer');
    const progressBar = document.getElementById('progressBar');
    const qualityOptions = document.getElementById('qualityOptions');
    const messageDiv = document.getElementById('message');

    // Reset UI
    progressBarContainer.style.display = 'block';
    progressBar.style.width = '0%';
    messageDiv.textContent = '';
    qualityOptions.innerHTML = '';
    qualityOptions.style.display = 'none';

    const videoUrl = document.getElementById('videoUrl').value;

    if (!videoUrl) {
        messageDiv.textContent = "Please enter a video URL.";
        messageDiv.style.color = "red";
        progressBarContainer.style.display = 'none';
        return;
    }

    try {
        // Simulate progress bar animation
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            progressBar.style.width = `${progress}%`;
            if (progress >= 90) clearInterval(interval);
        }, 100);

        // Fetch video details from API
        const response = await fetch(
            `https://api.paxsenix.biz.id/dl/aio?url=${encodeURIComponent(videoUrl)}`
        );
        const data = await response.json();

        // Stop progress bar and show 100%
        progressBar.style.width = '100%';
        clearInterval(interval);

        if (data.ok && data.url && data.url.length > 0) {
            messageDiv.textContent = "Select a quality to download:";
            messageDiv.style.color = "white";
            qualityOptions.style.display = 'flex';

            // Generate quality buttons
            data.url.forEach((item) => {
                const qualityButton = document.createElement('a');
                qualityButton.href = item.url;
                qualityButton.textContent = item.quality;
                qualityButton.download = ''; // Enable direct download
                qualityButton.target = '_blank'; // Open in a new tab
                qualityOptions.appendChild(qualityButton);
            });
        } else {
            messageDiv.textContent = "Failed to retrieve video details. Please try again.";
            messageDiv.style.color = "red";
        }
    } catch (error) {
        messageDiv.textContent = "An error occurred. Please try again.";
        messageDiv.style.color = "red";
        console.error(error);
    } finally {
        // Hide the progress bar after some time
        setTimeout(() => {
            progressBarContainer.style.display = 'none';
        }, 1000);
    }
});

function toggleFAQ(questionElement) {
    const faqItem = questionElement.parentNode;
    const answer = questionElement.nextElementSibling;
    const icon = questionElement.querySelector('.material-icons');

    questionElement.classList.toggle('active');
    answer.style.display = answer.style.display === "block" ? "none" : "block";
}
