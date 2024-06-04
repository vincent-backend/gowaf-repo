// mobile
const isMobile = Boolean(
  navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
);
// document.documentElement.className = isMobile ? "is-xs" : "is-lg";
window.isMobile = isMobile;

function handleResize() {
  const screenWidth = Math.min(1024, window.screen.width);
  document.documentElement.style.fontSize = screenWidth*8 / 390 + "px";
}
if (isMobile) {
  handleResize();
  window.addEventListener("resize", handleResize);
}
