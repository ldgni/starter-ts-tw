export async function fetchRandomImage() {
  const res = await fetch(import.meta.env.VITE_API_URL);
  return res.url;
}
