import { getRecaptchaToken } from './recaptcha';

export async function submitContact({
  company,
  project,
  email,
  sourceDomain,
  recaptchaAction = 'contact',
}) {
  const apiUrl = process.env.REACT_APP_API_URL || '/api/contact';

  let recaptchaToken;
  try {
    recaptchaToken = await getRecaptchaToken(recaptchaAction);
  } catch {
    throw new Error('Could not verify submission. Please refresh and try again.');
  }

  let response;
  try {
    response = await fetch(apiUrl, {
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
  } catch {
    throw new Error('Could not reach the server. Please try again.');
  }

  const contentType = response.headers.get('content-type') || '';
  let data = null;

  if (contentType.includes('application/json')) {
    try {
      data = await response.json();
    } catch {
      throw new Error('Invalid response from server');
    }
  } else if (!response.ok) {
    throw new Error('Form service unavailable. Please try again later.');
  }

  if (!response.ok) {
    throw new Error(data?.error || data?.message || 'Failed to send message');
  }

  return data || { success: true };
}
