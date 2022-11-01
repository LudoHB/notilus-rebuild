/* Elements du DOM */
// Loader
const loader = document.getElementById('loader');

// Bouton et zone de dialogue
const btnMessage = document.getElementById('btn-message');
const message = document.getElementById('message');

const btnDialogue = document.getElementById('btn-dialogue');
const btnDialTxt = document.getElementById('btn-dialogue-text');

// Compteur de textes
let counterText = 1;

// Image et nom du perso (DOM)
const avatar = document.getElementById('avatar');
const charName = document.getElementById('character-name');

// fonction pour changer le nom et l'image du personnage
let setname = "";
let setAvatar = "";
function setCharacter(setName, setAvatar) {
  charName.innerText = setName, " :";
  avatar.setAttribute('src', '../assets/characters/' + setAvatar);
}

// Bouton et zone d'astuce
const btnHint = document.getElementById('btn-hint');
const hint = document.getElementById('hint');

// Bouton et zone énigmes / inventaire
const btnStuff = document.getElementById('btn-stuff');
const stuff = document.getElementById('stuff');

// Bouton et zone d'options
const btnOptions = document.getElementById('btn-options');
const options = document.getElementById('options');

// Fermer les boites grace à la croix [X]
const closeMessage = document.getElementById('close-message');
const closeHint = document.getElementById('close-hint');
const closeStuff = document.getElementById('close-stuff');
const closeOptions = document.getElementById('close-options');

const btnAnswer = document.getElementById('btns-answer');
const btnNext = document.getElementById('btn-next');
const btnFinishScene = document.getElementById('btn-finish-scene');


/* * * * * * * * */
/* * * * * * * * */

// Gestion affichage global (boutons et zones)

btnMessage.addEventListener('click', () => {
  message.classList.toggle('hidden');
  btnMessage.classList.toggle('animation-bounce');

  hint.classList.add('hidden');
  stuff.classList.add('hidden');
  options.classList.add('hidden');
})

btnHint.addEventListener('click', () => {
  hint.classList.toggle('hidden');

  message.classList.add('hidden');
  stuff.classList.add('hidden');
  options.classList.add('hidden');
})
closeHint.addEventListener('click', () => {
  hint.classList.toggle('hidden');
})
closeMessage.addEventListener('click', () => {
  message.classList.toggle('hidden');
})
closeStuff.addEventListener('click', () => {
  stuff.classList.toggle('hidden');
})
closeOptions.addEventListener('click', () => {
  options.classList.toggle('hidden');
})

btnStuff.addEventListener('click', () => {
  stuff.classList.toggle('hidden');

  message.classList.add('hidden');
  hint.classList.add('hidden');
  options.classList.add('hidden');
})

btnOptions.addEventListener('click', () => {
  options.classList.toggle('hidden');

  message.classList.add('hidden');
  hint.classList.add('hidden');
  stuff.classList.add('hidden');
});

// - - - - - - - - -

