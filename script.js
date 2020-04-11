const drumItems = document.querySelectorAll('.drums__item');

const sounds = {
  a: '/sounds/clap.wav',
  s: '/sounds/hihat.wav',
  d: '/sounds/kick.wav',
  f: '/sounds/openhat.wav',
  g: '/sounds/boom.wav',
  h: '/sounds/ride.wav',
  j: '/sounds/snare.wav',
  k: '/sounds/tom.wav',
  l: '/sounds/tink.wav',
};

const playAudio = (elKey) => {
  const audio = new Audio(sounds[elKey]);
  audio.play();
};

drumItems.forEach((el) => {
  const elKey = el.querySelector('.drums__letter').textContent.toLowerCase();

  document.addEventListener('keyup', (e) => {
    if (elKey === e.key) {
      playAudio(elKey);

      el.classList.add('active');

      setTimeout(() => {
        el.classList.remove('active');
      }, 200);
    }
  });
});


