export function isMobile() {
  const userAgent = typeof window === 'object' ? window.navigator.userAgent : 'server';

  const isMobile = Boolean(
    userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  );

  return isMobile;
}
