/**
 * FAAIZA MUNIR - MAIN APPLICATION SCRIPT
 * Scroll reveal animations, newsletter submission handling,
 * and toast feedback.
 */

document.addEventListener("DOMContentLoaded", () => {
  /* 1. DYNAMIC COPYRIGHT YEAR */
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* 2. SCROLL REVEAL ANIMATIONS */
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver unsupported
    revealElements.forEach((el) => el.classList.add("is-revealed"));
  }

  /* 3. NEWSLETTER FORM SUBMISSION & TOAST NOTIFICATION */
  const newsletterForm = document.getElementById("newsletterForm");
  const toastMsg = document.getElementById("toastMsg");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("newsletterName");
      const emailInput = document.getElementById("newsletterEmail");

      if (!emailInput || !emailInput.value.trim()) {
        showToast("Please enter a valid email address.", true);
        return;
      }

      const userName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Reader";

      // Show friendly confirmation toast
      showToast(`Welcome to Faaiza's world, ${userName}! You're on the list.`);

      // Reset form
      newsletterForm.reset();
    });
  }

  function showToast(text, isError = false) {
    if (!toastMsg) return;
    toastMsg.textContent = text;
    toastMsg.style.backgroundColor = isError ? "var(--color-orange)" : "var(--color-green)";
    toastMsg.classList.add("is-visible");

    setTimeout(() => {
      toastMsg.classList.remove("is-visible");
    }, 4500);
  }

  /* 4. SMOOTH SCROLLING FOR ALL INTERNAL ANCHORS */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId.length <= 1) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});
