// Preloader
window.onload = function (): void {
  const preloader: HTMLElement | null = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      document.body.style.display = 'block';
    }, 1500);
  }
};

// Back to top button
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton: HTMLElement | null = document.querySelector('.back-to-top');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});