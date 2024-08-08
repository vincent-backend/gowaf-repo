// detect mobile
export function detectMobileDevice() {
  const userAgent =
    typeof window === 'object' ? window.navigator.userAgent : 'server';

  const isMobile = Boolean(
    userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  );

  return isMobile;
}

declare global {
  interface Window {
    isMobile: boolean;
  }
}
// is mobile
// export const isMobile = ref(detectMobileDevice());
export const isMobile = ref(window.isMobile);
// isMobile.value = window.isMobile

onNuxtReady(() => {
  isMobile.value = detectMobileDevice();
  window.isMobile = detectMobileDevice();
  setInterval(() => {
    const newValue = detectMobileDevice();
    if (isMobile.value != newValue) {
      isMobile.value = newValue;
      window.isMobile = newValue;
    }
  }, 200);
});

export function obeyDevice<T>(laptopValue: T, mobileValue: T) {
  return computed(() => (isMobile.value ? mobileValue : laptopValue));
}
