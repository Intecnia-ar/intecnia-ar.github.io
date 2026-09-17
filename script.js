document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.slide-track');

    // duplicamos contenido para loop infinito
    track.innerHTML += track.innerHTML;

    let position = 0;

    function moveSlider() {
        const logos = document.querySelectorAll('.logo_cliente');
        const logoWidth = logos[0].offsetWidth + 20; // gap
        const move = logoWidth * 4;

        position += move;

        track.style.transform = `translateX(-${position}px)`;
        track.style.transition = "transform 0.5s ease";

        if (position >= track.scrollWidth / 2) {
            setTimeout(() => {
                track.style.transition = "none";
                position = 0;
                track.style.transform = `translateX(0)`;
            }, 500);
        }
    }

    setInterval(moveSlider, 3000);
});