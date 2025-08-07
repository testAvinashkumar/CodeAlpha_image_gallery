const galleryItems = document.querySelectorAll('.image-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;
let images = [];

galleryItems.forEach((item, index) => {
  const img = item.querySelector('img');
  images.push(img.src);

  item.addEventListener('click', () => {
    currentIndex = index;
    openLightbox(images[currentIndex]);
  });
});

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex];
}

// Filter logic
const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    galleryItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
