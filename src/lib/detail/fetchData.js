export async function fetchData(url, method = 'GET') {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url} API 호출에 실패했습니다.`);

  return await response.json();
}
