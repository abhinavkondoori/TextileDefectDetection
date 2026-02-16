const overlayToggle = document.getElementById("overlayToggle");
const overlayFigures = document.querySelectorAll(".overlay");

const updateOverlayVisibility = () => {
  const hideOverlay = !overlayToggle.checked;
  overlayFigures.forEach((figure) => {
    figure.classList.toggle("hide-overlay", hideOverlay);
  });
};

overlayToggle.addEventListener("change", updateOverlayVisibility);
updateOverlayVisibility();
