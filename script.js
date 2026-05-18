const heartsContainer = document.getElementById('hearts');
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    let isPlaying = false;

    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = Math.random() > 0.35 ? '❤' : '♡';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = Math.random() * 18 + 12 + 'px';
      heart.style.animationDuration = Math.random() * 5 + 7 + 's';
      heart.style.setProperty('--move', Math.random() * 140 - 70 + 'px');
      heartsContainer.appendChild(heart);

      setTimeout(() => heart.remove(), 13000);
    }

    setInterval(createHeart, 650);

    function hasMusicSource() {
      const source = music.querySelector('source');
      return source && source.getAttribute('src') && source.getAttribute('src').trim() !== '';
    }

    function toggleMusic() {
      if (!hasMusicSource()) {
        alert('Füge deine Musikdatei in das audio-Tag ein, z. B. musik.mp3 ❤️');
        return;
      }

      if (isPlaying) {
        music.pause();
        musicBtn.classList.remove('playing');
      } else {
        music.play();
        musicBtn.classList.add('playing');
      }

      isPlaying = !isPlaying;
    }