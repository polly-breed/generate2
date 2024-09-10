const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const generateBtn = document.getElementById('generate-btn');

const timerDisplay = document.getElementById('timer-display');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');

const images = [
  'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
  'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
  // Add all other image filenames here up to 'image136.jpg'
  'image136.jpg'
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return `images/${images[randomIndex]}`;
}

function generateImages() {
  let img1, img2;
  
  do {
    img1 = getRandomImage();
    img2 = getRandomImage();
  } while (img1 === img2);
  
  image1.src = img1;
  image2.src = img2;
}

let timer;
let totalTime = 0;
let remainingTime = 0;
let isRunning = false;

function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(timer);
      isRunning = false;
      return;
    }
    remainingTime--;
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  if (!isRunning) return;
  clearInterval(timer);
  isRunning = false;
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  remainingTime = totalTime;
  updateTimerDisplay();
}

function setTimer() {
  const minutes = parseInt(minutesInput.value, 10) || 0;
  const seconds = parseInt(secondsInput.value, 10) || 0;
  totalTime = remainingTime = minutes * 60 + seconds;
  updateTimerDisplay();
}

generateBtn.addEventListener('click', generateImages);
startBtn.addEventListener('click', () => {
  setTimer();
  startTimer();
});
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);
