/* Responsive Portfolio interactions — vanilla JavaScript */
"use strict";

document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const form = document.querySelector("#contact-form");
  const formNote = document.querySelector("#form-note");
  const year = document.querySelector("#year");

  // Keep the footer year current.
  if (year) year.textContent = new Date().getFullYear();

  // Light / dark theme with localStorage persistence.
  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (themeButton) {
      const icon = themeButton.querySelector(".theme-icon");
      if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
      themeButton.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    }
  };

  let savedTheme = null;
  try { savedTheme = localStorage.getItem("portfolio-theme"); } catch (_) {}
  const initialTheme = savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : (root.dataset.theme || "light");
  applyTheme(initialTheme);

  themeButton?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    try { localStorage.setItem("portfolio-theme", nextTheme); } catch (_) {}
  });

  // Accessible mobile navigation.
  const closeMenu = () => {
    navLinks?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation menu");
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = navLinks?.classList.toggle("open") ?? false;
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  // Reveal elements as they enter the viewport.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Prepare an email using the visitor's default mail application.
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      formNote.textContent = "Please complete all fields before preparing your email.";
      return;
    }

    // Replace this address with your own email before publishing.
    const recipient = "hello@example.com";
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    formNote.textContent = "Your email application should open with your message. Review it and press Send.";
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
});
