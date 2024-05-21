import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Створюємо SimpleLightbox
const lightbox = new SimpleLightbox('.image-link');

// Функція для відображення зображень
export function displayImages(images) {
  const gallery = document.getElementById('gallery');
  // Повністю очищаємо вміст галереї перед додаванням нових зображень
  gallery.innerHTML = '';

  if (images.length === 0) {
    console.log('No images found');
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  // Додаємо картки зображень до галереї
  const cardsHTML = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="image-link">
      <div class="card">
        <img src="${image.webformatURL}" alt="${image.tags}">
        <div class="card-info">
          <div class="info-item">
            <p>Likes</p>
            <span>${image.likes}</span>
          </div>
          <div class="info-item">
            <p>Views</p>
            <span>${image.views}</span>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <span>${image.comments}</span>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <span>${image.downloads}</span>
          </div>
        </div>
      </div>
    </a>
  `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', cardsHTML);

  // Оновлюємо SimpleLightbox після додавання нових елементів та відкриваємо галерею
  lightbox.refresh();
}
