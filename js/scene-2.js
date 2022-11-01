setTimeout(function () {
  loader.classList.add("hidden");
}, 2000);

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

// Propre à la scene
const parcho = document.getElementById('parcho');
const enigme = document.getElementById('enigme1');
const question = document.getElementById('question-text');

btnMessage.classList.add('animate-pulse');

// Affichage selon les étapes du dialogue

// Dialogue du début (Phil)
btnAnswer.addEventListener('click', () => {
  switch (counterText) {
    case 1:
      text1.classList.add('hidden');
      text2.classList.remove('hidden');
      document.getElementById('btn-dialogue-text').innerText = 'Continuer';
      counterText++;
      break;

    case 2:
      message.classList.add('hidden');
      parcho.classList.remove('blur-sm');
      break;

    default:
      console.log(counterText);
  }
});

// Parchemin + Enigme (Gestion de l'affichage)
parcho.addEventListener('click', () => {
  btnStuff.classList.remove('hidden');
  btnStuff.classList.add('animate-bounce');
  btnStuff.classList.add('text-yellow-400');
  stuff.classList.remove('hidden');
});

// Résoudre l'enigme de Clara
function enigme1() {

  var answerInput = prompt("Alors, moussaillon ? Tu as la réponse à c'problème ?");

  switch (answerInput) {

    // Bonne réponse
    case 'clara' || "Clara":
      alert("Bravo p'tit mouss !");
      btnStuff.classList.remove('animate-bounce');
      btnStuff.classList.remove('text-yellow-400');
      stuff.classList.add('hidden');
      parcho.classList.add('hidden');
      question.innerText = "Vous pouvez continuer l'aventure";
      setCharacter("Clara", "clara.png")
      btnAnswer.classList.add('hidden');
      message.classList.remove('hidden');
      text2.innerText = "Merci d’m’avoir libérée p’tit matelot! … Morbleu! Qu’est ce qu’c’est que ces caisses ?"
      break;

    // En cas d'erreur ou de champ vide
    default:
      alert("SACRE BLEU ! C'nest pas la réponse. Essaye encore !");
  }
}