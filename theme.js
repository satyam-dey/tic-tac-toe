const themeToggle = document.getElementById('theme-toggle');

// Check and apply the saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === 'dark-theme' ? '🌜' : '🌞';
}

// Toggle theme and icon on button click and image
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  themeToggle.textContent = isDark ? '🌜' : '🌞';

  // Save the theme in localStorage
  if (isDark) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.removeItem('theme');
  }
});