// Loader || Pour laisser le temps de charger les images et les sons
setTimeout(function () {
  loader.classList.add("hidden");
}, 2000);

// Propre a la scene
const answerYes = document.getElementById('answer-yes');

btnMessage.classList.add('animate-pulse');
btnFinishScene.classList.add('hidden');

closeMessage.addEventListener('click', () => {
  btnMessage.classList.toggle('animate-pulse');
});

answerYes.addEventListener('click', () => {
  btnMessage.classList.remove('animate-pulse');
  window.location.assign("../scenes/scene-2.html");
});