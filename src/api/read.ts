import { makeApiUrl } from './makeApiUrl';

export const readAll = (key: string) => {
  const apiUrl = makeApiUrl(key);

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data);
};

export default readAll;
