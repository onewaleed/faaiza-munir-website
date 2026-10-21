/**
 * FAAIZA MUNIR - 3D CURSOR-TRACKING BOOK ANIMATION
 * Smooth physics-based 3D tilt, realistic lighting glare & dynamic shadow.
 * Follows the mouse cursor seamlessly across the featured book area.
 */

(function initBookCursorTracking() {
  const stage = document.getElementById("bookStage");
  const book = document.getElementById("bookCoverPlate");
  const shadow = document.getElementById("bookShadow");
  const glare = document.getElementById("bookGlare");

  if (!stage || !book) return;

  // Disable on coarse pointer devices (touchscreens) to preserve clean native scrolling
  if (window.matchMedia("(pointer: coarse)").matches) return;

  let bounds = null;
  let isHovered = false;
  let targetRotX = 0;
  let targetRotY = 0;
  let targetTransZ = 0;
  let currentRotX = 0;
  let currentRotY = 0;
  let currentTransZ = 0;
  let glareOpacity = 0;
  let currentGlareOpacity = 0;
  let glareAngle = 135;
  let animId = null;

  function updateBounds() {
    bounds = stage.getBoundingClientRect();
  }

  window.addEventListener("resize", updateBounds);
  window.addEventListener("scroll", updateBounds, { passive: true });

  // Track cursor movement over the book stage
  stage.addEventListener("mouseenter", (e) => {
    updateBounds();
    isHovered = true;
    startAnimation();
  });

  stage.addEventListener("mousemove", (e) => {
    if (!bounds) updateBounds();

    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;

    // Relative offset from center (-1 to +1)
    const normX = Math.max(-1, Math.min(1, (mouseX / bounds.width - 0.5) * 2));
    const normY = Math.max(-1, Math.min(1, (mouseY / bounds.height - 0.5) * 2));

    // Dynamic rotation: Y-axis tracks horizontal mouse, X-axis tracks vertical mouse
    targetRotY = normX * 18;  // max 18 degrees tilt
    targetRotX = -normY * 14; // max 14 degrees tilt
    targetTransZ = 20;        // subtle lift towards camera

    // Calculate light reflection angle and intensity
    const rad = Math.atan2(normY, normX);
    glareAngle = (rad * (180 / Math.PI) + 90);
    glareOpacity = Math.min(0.42, Math.sqrt(normX * normX + normY * normY) * 0.35);
  });

  stage.addEventListener("mouseleave", () => {
    isHovered = false;
    targetRotX = 0;
    targetRotY = 0;
    targetTransZ = 0;
    glareOpacity = 0;
  });

  function startAnimation() {
    if (animId) return;

    function tick() {
      // Smooth dampening (lerp)
      const factor = isHovered ? 0.09 : 0.06;
      currentRotX += (targetRotX - currentRotX) * factor;
      currentRotY += (targetRotY - currentRotY) * factor;
      currentTransZ += (targetTransZ - currentTransZ) * factor;
      currentGlareOpacity += (glareOpacity - currentGlareOpacity) * factor;

      // Apply 3D transform to book plate
      book.style.transform = `perspective(1100px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) translateZ(${currentTransZ.toFixed(1)}px)`;

      // Dynamic light glare overlay
      if (glare) {
        glare.style.opacity = currentGlareOpacity.toFixed(3);
        glare.style.background = `linear-gradient(${glareAngle.toFixed(1)}deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 65%)`;
      }

      // Opposite directional shadow for realistic floor depth
      if (shadow) {
        const shadowX = (currentRotY * -1.4).toFixed(1);
        const shadowY = (Math.abs(currentRotX) * 0.5).toFixed(1);
        const shadowScale = (1 - Math.abs(currentRotY) * 0.01).toFixed(2);
        shadow.style.transform = `translate3d(${shadowX}px, ${shadowY}px, 0) scale(${shadowScale})`;
        shadow.style.opacity = isHovered ? "0.9" : "0.7";
      }

      // Stop loop when fully at rest and not hovered
      if (
        !isHovered &&
        Math.abs(currentRotX) < 0.05 &&
        Math.abs(currentRotY) < 0.05 &&
        Math.abs(currentTransZ) < 0.05 &&
        currentGlareOpacity < 0.01
      ) {
        book.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
        if (shadow) shadow.style.transform = "none";
        if (glare) glare.style.opacity = "0";
        cancelAnimationFrame(animId);
        animId = null;
        return;
      }

      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);
  }
})();
