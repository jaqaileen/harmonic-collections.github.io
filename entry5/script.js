const parallaxBg = document.querySelector('.parallax-bg');

window.addEventListener('keydown', (e) => {
    const currentX = parallaxBg.style.transform ? parseFloat(parallaxBg.style.transform.match(/-?\d+\.*\d*/)[0]) : 0;
    const maxX = window.innerWidth;
    const step = 50; // Adjust as needed for scrolling speed

    if (e.key === 'ArrowRight' && currentX >= -maxX) {
        parallaxBg.style.transform = `translateX(${currentX - step}px)`;
    } else if (e.key === 'ArrowDown') {
        window.scrollBy(0, step);
    } else if (e.key === 'ArrowLeft' && currentX <= 0) {
        parallaxBg.style.transform = `translateX(${currentX + step}px)`;
    } else if (e.key === 'ArrowUp') {
        window.scrollBy(0, -step);
    }
});
