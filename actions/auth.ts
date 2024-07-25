const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(`${STRAPI_API_URL}/auth/local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: email,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to login');
  }

  const data = await response.json();
  return data;
};

export const signupUser = async (username: string, email: string, password: string) => {
  const response = await fetch(`${STRAPI_API_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to register');
  }

  const data = await response.json();
  return data;
};
