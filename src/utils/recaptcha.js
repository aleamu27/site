export const RECAPTCHA_SITE_KEY =
  process.env.REACT_APP_RECAPTCHA_SITE_KEY ||
  '6Lc6yRktAAAAAN5mxtDTmHY7YF_4VtA7uXMGzqao';

let scriptLoadPromise = null;

function loadRecaptchaScript() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('reCAPTCHA is only available in the browser'));
  }

  if (window.grecaptcha?.execute) {
    return Promise.resolve();
  }

  if (!scriptLoadPromise) {
    scriptLoadPromise = new Promise((resolve, reject) => {
      const onReady = () => {
        window.grecaptcha.ready(resolve);
      };

      const existing = document.querySelector('script[src*="google.com/recaptcha/api.js"]');
      if (existing) {
        if (window.grecaptcha?.execute) {
          onReady();
        } else {
          existing.addEventListener('load', onReady);
          existing.addEventListener('error', () => reject(new Error('Failed to load reCAPTCHA')));
        }
        return;
      }

      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = onReady;
      script.onerror = () => reject(new Error('Failed to load reCAPTCHA'));
      document.head.appendChild(script);
    });
  }

  return scriptLoadPromise;
}

export async function getRecaptchaToken(action = 'contact') {
  await loadRecaptchaScript();
  return window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
}
