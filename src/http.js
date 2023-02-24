import httpGet from './mock';

export default function fetchData(url) {
  const data = httpGet(url);
  return data;
}
