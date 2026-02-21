  async function loadYouTubeVideos() {
    const channelId = "UC-AWjJhFoRN_TL_D63UUgGw";
    const limit = 6;

    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const container = document.getElementById("youtube-container");

      if (data.status !== "ok") return;

      container.innerHTML = "";

      // función que devuelve la PRIMERA miniatura válida
      function getValidThumbnail(videoId) {
        const urls = [
          `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
          `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        ];

        return new Promise(resolve => {
          let index = 0;

          function tryNext() {
            if (index >= urls.length) {
              resolve(urls[urls.length - 1]);
              return;
            }

            const img = new Image();
            img.src = urls[index];

            img.onload = () => {
              // descartamos placeholders chicos de YouTube
              if (img.width >= 1000) {
                resolve(urls[index]);
              } else {
                index++;
                tryNext();
              }
            };

            img.onerror = () => {
              index++;
              tryNext();
            };
          }

          tryNext();
        });
      }

      for (const video of data.items.slice(0, limit)) {
        const videoId = video.link.split("v=")[1];
        const thumb = await getValidThumbnail(videoId);

        const card = `
          <div class="video-card">
            <a href="${video.link}" target="_blank">
              <img src="${thumb}" alt="${video.title}">
            </a>
            <h4>${video.title}</h4>
            <a class="video-link" href="${video.link}" target="_blank">
              <svg class="play-icon" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              WATCH VIDEO
            </a>
          </div>
        `;

        container.insertAdjacentHTML("beforeend", card);
      }

    } catch (error) {
      console.error("Error:", error);
      document.getElementById("youtube-container").innerHTML =
        "<p>Could not load videos.</p>";
    }
  }

  loadYouTubeVideos();

  /* --- BACK TO TOP --- */
  const btnTop = document.getElementById("backToTop");

  window.onscroll = function () {
    btnTop.style.display =
      document.documentElement.scrollTop > 300 ? "block" : "none";
  };

  btnTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
