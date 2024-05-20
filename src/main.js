import { displayImages } from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js';


document
  .getElementById('search-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();

    if (!query) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search term!',
      });
      return;
    }

    try {
      const images = await fetchImages(query);
      // Викликаємо функцію для відображення отриманих зображень у галереї
      displayImages(images);
    } catch (error) {
      // Обробка помилок
      console.error('Error fetching images:', error);
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    new SimpleLightbox('.image-link');
  });
