// detect mobile
export function detectMobileDevice() {
  const userAgent = typeof window === 'object' ? window.navigator.userAgent : 'server';

  const isMobile = Boolean(
    userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  );

  return isMobile;
}

// is mobile
// export const isMobile = ref(detectMobileDevice());
export const isMobile = ref(false);

onNuxtReady(() => {
  isMobile.value = detectMobileDevice();

  setInterval(() => {
    const newValue = detectMobileDevice();
    if (isMobile.value != newValue) {
      isMobile.value = newValue;
    }
  }, 200);
});

export function obeyDevice<T>(laptopValue: T, mobileValue: T) {
  return computed(() => isMobile.value ? mobileValue : laptopValue);
}