import { SERVER_URL } from '../URLs';

export const makeApiUrl = (key: string) => `${SERVER_URL}${key}`;

export default makeApiUrl;
