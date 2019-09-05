const baseUrl = 'http://localhost:3000/';

export const post = async (url, data) => {
  const response = await fetch(baseUrl + url, {
    body: JSON.stringify(data),
    method: 'post',
    'Content-Type': 'application/json',
  });

  return response.json();
};
