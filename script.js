<script>
document.querySelectorAll('.gallery').forEach(gallery => {
  const track = gallery.querySelector('.gallery-track');
  let scrollPosition = 0;
  const scrollStep = gallery.offsetWidth; // scrolls by one gallery width

  gallery.querySelector('.scroll-right').onclick = () => {
    scrollPosition -= scrollStep;
    track.style.transform = `translateX(${scrollPosition}px)`;
  };

  gallery.querySelector('.scroll-left').onclick = () => {
    scrollPosition += scrollStep;
    track.style.transform = `translateX(${scrollPosition}px)`;
  };
});
</script>
