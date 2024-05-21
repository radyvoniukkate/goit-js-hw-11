

// Приклад коду для виконання HTTP-запиту до сервера і обробки відповіді
export async function fetchImages(query) {
  const API_KEY = '43969055-d0c46f522fb3643e2ec2eb3d1';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    throw new Error('Error fetching images:', error);
  }
}
