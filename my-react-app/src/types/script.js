// Preloader
window.onload = function () {
    var preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(function () {
            preloader.style.display = 'none';
            document.body.style.display = 'block';
        }, 1500);
    }
};
// Back to top button
document.addEventListener('DOMContentLoaded', function () {
    var backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
