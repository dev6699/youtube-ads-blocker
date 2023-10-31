setInterval(() => {
  const vid = document.querySelector(".video-stream.html5-main-video")
  if (!vid) {
    return
  }

  const skipBtn = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text')
  if (skipBtn) {
    skipBtn.click()
  }

  const ad = document.querySelector('.video-ads.ytp-ad-module')
  if (ad && ad.children.length > 0) {
    vid.playbackRate = 16
    vid.muted = true;
  }

  const rightTopAd = document.querySelector('ytd-companion-slot-renderer')
  if (rightTopAd) {
    rightTopAd.remove()
  }

  const vidAd = document.querySelector('ytd-ad-slot-renderer')
  if (vidAd) {
    vidAd.remove()
  }

}, 1000);