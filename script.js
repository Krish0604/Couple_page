const heartsContainer = document.getElementById('hearts');
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

if (musicBtn) {
  musicBtn.setAttribute('aria-pressed', 'false');
}

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

// Respect users who prefer reduced motion
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  setInterval(createHeart, 650);
}

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
      if (musicBtn) {
        musicBtn.setAttribute('aria-pressed', String(isPlaying));
      }
    }

// Calendar Navigation
const prevBtn = document.getElementById('prevMonth');
const nextBtn = document.getElementById('nextMonth');
const monthTitle = document.getElementById('monthTitle');
const calendarMonths = document.querySelectorAll('.calendar-month');

const monthNames = ['Dezember 2025', 'Januar 2026', 'Februar 2026', 'März 2026', 'April 2026', 'Mai 2026'];
let currentMonthIndex = 4; // Start with Mai 2026 (today's month)

function showMonth(index) {
  if (index < 0 || index >= calendarMonths.length) return;
  
  calendarMonths.forEach(month => month.classList.remove('active'));
  calendarMonths[index].classList.add('active');
  monthTitle.textContent = monthNames[index];
  
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === calendarMonths.length - 1;
  
  currentMonthIndex = index;
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => showMonth(currentMonthIndex - 1));
  nextBtn.addEventListener('click', () => showMonth(currentMonthIndex + 1));
  
  showMonth(currentMonthIndex);
}

    // Korrigierte Kalender-Navigation: Dezember 2025 bis Dezember 2026
    document.addEventListener('DOMContentLoaded', () => {
      const months = Array.from(document.querySelectorAll('.calendar-month'));
      const monthTitle = document.getElementById('monthTitle');
      const oldPrev = document.getElementById('prevMonth');
      const oldNext = document.getElementById('nextMonth');

      // Entfernt mögliche alte Kalender-Listener aus script.js, ohne andere Skripte zu stören.
      const prev = oldPrev.cloneNode(true);
      const next = oldNext.cloneNode(true);
      oldPrev.replaceWith(prev);
      oldNext.replaceWith(next);

      let currentMonth = 0;

      function showMonth(index) {
        currentMonth = Math.max(0, Math.min(index, months.length - 1));
        months.forEach((month, i) => month.classList.toggle('active', i === currentMonth));
        monthTitle.textContent = months[currentMonth].dataset.title;
        prev.disabled = currentMonth === 0;
        next.disabled = currentMonth === months.length - 1;
      }

      prev.addEventListener('click', () => showMonth(currentMonth - 1));
      next.addEventListener('click', () => showMonth(currentMonth + 1));
      showMonth(0);
    });