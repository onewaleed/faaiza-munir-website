/**
 * FAAIZA MUNIR - NAVIGATION & MOBILE MENU SCRIPT
 * Sticky header blur, smooth scrolling, active link tracking,
 * and accessible animated mobile drawer.
 */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileBackdrop = document.getElementById("mobileBackdrop");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const desktopNavLinks = document.querySelectorAll(".nav-link");

  /* 1. STICKY HEADER BLUR ON SCROLL */
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  /* 2. MOBILE DRAWER OPEN / CLOSE */
  function openMobileMenu() {
    if (!mobileToggle || !mobileDrawer) return;
    mobileToggle.classList.add("is-open");
    mobileToggle.setAttribute("aria-expanded", "true");
    mobileDrawer.classList.add("is-open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    if (mobileBackdrop) mobileBackdrop.classList.add("is-visible");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    if (!mobileToggle || !mobileDrawer) return;
    mobileToggle.classList.remove("is-open");
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileDrawer.classList.remove("is-open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    if (mobileBackdrop) mobileBackdrop.classList.remove("is-visible");
    document.body.style.overflow = "";
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileToggle.classList.contains("is-open");
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", closeMobileMenu);
  }

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("is-open")) {
      closeMobileMenu();
    }
  });

  // Close drawer when a mobile nav link is clicked
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  /* 3. SCROLL SPY - HIGHLIGHT ACTIVE SECTION */
  const observedSections = document.querySelectorAll("section[id]");
  if ("IntersectionObserver" in window && observedSections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          updateActiveLink(id);
        }
      });
    }, observerOptions);

    observedSections.forEach((sec) => sectionObserver.observe(sec));
  }

  function updateActiveLink(sectionId) {
    desktopNavLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${sectionId}` || (sectionId === "hero" && href === "#")) {
        link.classList.add("is-active");
      } else if (href.startsWith("#")) {
        link.classList.remove("is-active");
      }
    });
  }
});
