/**
 * Returns email and brand config based on current hostname
 */
export function getDomainConfig() {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

  if (hostname.includes('heptatech.io')) {
    return {
      email: 'hello@heptatech.io',
      domain: 'heptatech.io',
      brand: 'Heptatech',
    };
  }

  // Default to hepta.no
  return {
    email: 'j@hepta.no',
    domain: 'hepta.no',
    brand: 'Hepta',
  };
}
