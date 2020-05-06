var rotatingSquare = document.getElementById("web-animation").animate(
  [{
      backgroundColor: '#000000',
      opacity: 1.0,
      transform: 'rotate(0deg) translate3D(0, 0, 0)'
    },
    {
      backgroundColor: '#444000',
      opacity: 0.3
    },
    {
      backgroundColor: '#000000',
      opacity: 1.0,
      transform: 'rotate(360deg) translate3D(0, 0, 0)'
    }
  ], {
    duration: 500,
    iterations: Infinity,
    easing: 'ease-in-out'
  }
)

const headerString = 'I am a Javascript Ninja';
const header = document.querySelector('h1');

let counter = 0;
let headerSentenceSplitted = headerString.split('');

const createHeaderLetters = setInterval(() => {
  if (counter === headerSentenceSplitted.length) {
    return;
  }

  let newSpan = document.createElement('span');

  newSpan.innerHTML = headerSentenceSplitted[counter]


  header.appendChild(newSpan);
  counter++;
}, 100)