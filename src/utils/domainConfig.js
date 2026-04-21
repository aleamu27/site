/**
 * Returns email, brand, and language config based on current hostname
 */
export function getDomainConfig() {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

  if (hostname.includes('heptatech.io')) {
    return {
      email: 'hello@heptatech.io',
      domain: 'heptatech.io',
      brand: 'Heptatech',
      language: 'en',
      locale: 'en-US',
    };
  }

  // Default to hepta.no (Norwegian)
  return {
    email: 'j@hepta.no',
    domain: 'hepta.no',
    brand: 'Hepta',
    language: 'no',
    locale: 'nb-NO',
  };
}

export function getLanguage() {
  return getDomainConfig().language;
}

export function getLocale() {
  return getDomainConfig().locale;
}
