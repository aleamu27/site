import { getRecaptchaToken } from './recaptcha';

export async function submitContact({
  company,
  project,
  email,
  sourceDomain,
  recaptchaAction = 'contact',
}) {
  const apiUrl = process.env.REACT_APP_API_URL || '/api/contact';
  const recaptchaToken = await getRecaptchaToken(recaptchaAction);

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      company,
      project,
      email,
      sourceDomain,
      recaptchaToken,
    }),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error('Invalid response from server');
  }

  if (!response.ok) {
    throw new Error(data.error || 'Failed to send message');
  }

  return data;
}
