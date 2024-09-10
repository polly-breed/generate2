const generateBtn = document.getElementById('generate-btn');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

function generateImages() {
  const randomImage1 = `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;
  const randomImage2 = `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;
  image1.src = randomImage1;
  image2.src = randomImage2;
}

generateBtn.addEventListener('click', generateImages);
