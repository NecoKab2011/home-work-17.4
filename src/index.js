const apiKey = '50072628-8f6f62aa1cc293b82b9b384d5';
const apiUrl = 'https://pixabay.com/api/';
let page = 1;
const perPage = 9;

const gallery = document.querySelector('#image-gallery');
const loadMoreBtn = document.querySelector('#load-more-btn');

function fetchImages() {
  const url = `${apiUrl}?key=${apiKey}&editors_choice=true&per_page=${perPage}&page=${page}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.hits) {
      displayImages(data.hits);
    } else {
      console.error('Помилка в даних:', data);
    }
  })
  .catch(error => {
    console.log(error);
  });
}

function displayImages(images) {
  images.forEach(img => {
    const imgElement = document.createElement('img');
    imgElement.src = img.webformatURL;
    imgElement.alt = img.tags;
    gallery.appendChild(imgElement);
  });
}

loadMoreBtn.addEventListener('click', function () {
  page++;
  fetchImages();
});

fetchImages();

