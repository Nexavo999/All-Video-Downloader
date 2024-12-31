<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Video Downloader</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <div>
            <h2>All Video Downloader</h2>
            <p>Easily download your favorite videos.</p>
            <input type="text" id="videoUrl" class="input-field" placeholder="Video URL">
            <button id="downloadButton" class="download-button">Download</button>

            <!-- Progress Bar -->
            <div id="progressBarContainer" class="progress-bar-container" style="display: none;">
                <div id="progressBar" class="progress-bar"></div>
            </div>

            <!-- Video Quality Options -->
            <div id="qualityOptions" class="quality-options" style="display: none;"></div>

            <!-- Error/Success Messages -->
            <div id="message" class="message"></div>

            <div class="faq-section">
                <p><strong>Frequently Asked Questions</strong></p>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        What is All Video Downloader?
                        <span class="material-icons">expand_more</span>
                    </div>
                    <div class="faq-answer">All Video Downloader is a web tool that allows you to download your favorite videos from various platforms for offline viewing. (Disclaimer: Only for legal use).</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        Is it free to use?
                        <span class="material-icons">expand_more</span>
                    </div>
                    <div class="faq-answer">Yes, All Video Downloader is currently free to use.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        What video quality can I expect?
                        <span class="material-icons">expand_more</span>
                    </div>
                    <div class="faq-answer">The video quality depends on the source video. All Video Downloader aims to provide the best available quality.</div>
                </div>
            </div>
        </div>

        <div class="links">
            <a href="#">Donate</a>
            <a href="#">Github</a>
            <a href="#">Telegram</a>
        </div>

        <div class="copyright">&copy;2025 Nexavo</div>
    </div>

    <script>
        function toggleFAQ(questionElement) {
            const faqItem = questionElement.parentNode;
            const answer = questionElement.nextElementSibling;
            const icon = questionElement.querySelector('.material-icons');

            questionElement.classList.toggle('active');
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        }

        // New JavaScript functionality
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
    </script>
</body>
    </html>
