const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const generateBtn = document.getElementById('generate-btn');

function generateImages() {
  const randomImage1 = `https://source.unsplash.com/random/800x600?sig=${Math.floor(Math.random() * 1000)}`;
  const randomImage2 = `https://source.unsplash.com/random/800x600?sig=${Math.floor(Math.random() * 1000)}`;
  
  image1.src = randomImage1;
  image2.src = randomImage2;
}

generateBtn.addEventListener('click', generateImages);
