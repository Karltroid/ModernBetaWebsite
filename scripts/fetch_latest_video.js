window.addEventListener("DOMContentLoaded", async () => {
  const rssToJsonUrl =
    "https://rss2json.com/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UCAXf-c5vsaF56fDijyzhqpQ";

  try {
    const response = await fetch(rssToJsonUrl);
    const data = await response.json();

    console.log(data);
    

    const latestVideo = data.items.find((item) => !item.title.includes("#"));

    if (latestVideo) {
      const videoId = latestVideo.link.split("v=")[1];
      const iframe = document.getElementById("trailer");
      if (iframe) iframe.src = `https://www.youtube.com/embed/${videoId}`;
    } else {
      console.warn("No suitable video found.");
    }
  } catch (error) {
    console.error("Error fetching latest video from RSS:", error);
  }
});
