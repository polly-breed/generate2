const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const generateBtn = document.getElementById('generate-btn');

function generateImages() {
  const randomImage1 = `https://pixabay.com/photos/random/?page=${Math.floor(Math.random() * 100)}`;
  const randomImage2 = `https://pixabay.com/photos/random/?page=${Math.floor(Math.random() * 100)}`;
  image1.src = randomImage1;
  image2.src = randomImage2;
}


generateBtn.addEventListener('click', generateImages);
