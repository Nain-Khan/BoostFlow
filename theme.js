const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  const htmlEl = document.documentElement;
  htmlEl.classList.toggle('dark');

  if (htmlEl.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.innerText = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.innerText = '🌙';
  }
});

// On load, set correct icon
window.addEventListener('DOMContentLoaded', () => {
  const isDark = document.documentElement.classList.contains('dark');
  document.getElementById('themeToggle').innerText = isDark ? '☀️' : '🌙';
});
