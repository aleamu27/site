async function verifyRecaptcha(token, expectedAction = 'contact') {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error('RECAPTCHA_SECRET_KEY is not configured');
    return { ok: false, error: 'Captcha verification is not configured' };
  }

  if (!token) {
    return { ok: false, error: 'Captcha verification required' };
  }

  const params = new URLSearchParams({
    secret,
    response: token,
  });

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = await response.json();

  if (!data.success) {
    return { ok: false, error: 'Captcha verification failed' };
  }

  if (typeof data.score === 'number') {
    const minScore = Number(process.env.RECAPTCHA_MIN_SCORE || '0.5');
    if (data.score < minScore) {
      return { ok: false, error: 'Captcha verification failed' };
    }

    if (expectedAction && data.action && data.action !== expectedAction) {
      return { ok: false, error: 'Captcha verification failed' };
    }
  }

  return { ok: true };
}

module.exports = { verifyRecaptcha };
