const myShakeDiv = document.getElementById('myShakeDiv');

myShakeDiv.addEventListener('click', () => {
  // Add the shake class to trigger the animation
  myShakeDiv.classList.add('shake');
});

myShakeDiv.addEventListener('animationend', () => {
  // Remove the shake class after the animation ends
  myShakeDiv.classList.remove('shake');
});