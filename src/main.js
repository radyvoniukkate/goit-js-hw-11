import { displayImages } from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Елемент для відображення завантажувача
const loader = document.getElementById('loader');

// Описаний у документації
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

    // Показуємо завантажувач перед початком запиту
    loader.style.display = 'block';

    try {
      // Виконуємо HTTP-запит для отримання зображень
      const images = await fetchImages(query);
      console.log('Images fetched', images);

      // Показуємо зображення
      displayImages(images);
    } catch (error) {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
    } finally {
      // Ховаємо завантажувач після завершення запиту (незалежно від результату)
      loader.style.display = 'none';
    }
  });

// Створюємо SimpleLightbox після завантаження документа
document.addEventListener('DOMContentLoaded', function () {
  new SimpleLightbox('.image-link');
});
