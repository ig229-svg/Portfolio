const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const themeButton = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector(".theme-label");

document.body.classList.add("js-enabled");

if (menuButton && navigation) {
  function setMenuOpen(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    navigation.classList.toggle("is-open", isOpen);
  }

  menuButton.addEventListener("click", function () {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
}

if (themeButton && themeLabel) {
  function setTheme(theme) {
    const isLight = theme === "light";
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    themeButton.setAttribute("aria-pressed", String(isLight));
    themeLabel.textContent = isLight ? "Use dark theme" : "Use light theme";

    try {
      localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
    } catch (error) {
      // The selected theme still works if browser storage is unavailable.
    }
  }

  let savedTheme = "dark";

  try {
    const storedTheme = localStorage.getItem("portfolio-theme");
    savedTheme = storedTheme === "light" ? "light" : "dark";
  } catch (error) {
    // Keep the default dark theme if browser storage is unavailable.
  }

  setTheme(savedTheme);

  themeButton.addEventListener("click", function () {
    const isLight = document.documentElement.dataset.theme === "light";
    setTheme(isLight ? "dark" : "light");
  });
}