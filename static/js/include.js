// Variables
const modesToggle = document.getElementById("modesToggle");
const themeSelect = document.getElementById("themeSelect");
const body = document.querySelector("body");
let mode = body.dataset.mode;
let theme;  // Declare the 'theme' variable

// Define theme classes
const themes = {
  light: "light-mode",
  dark: "dark-mode",
  newyear: "newyear-mode", // January
  valentines: "valentines-mode", // February
  pride: "pride-mode", // June
  halloween: "halloween-mode", // October
  christmas: "christmas-mode", // December
};

// Function to set theme
function setTheme(themeName) {
  let currentMode = document.documentElement.classList;
  currentMode.remove(...currentMode);
  if (themeName !== "light") {
    currentMode.add(themes[themeName]);
  }
  localStorage.setItem("site_theme", themeName);
  theme = themeName;
  mode = themeName;
}

// Function to get current month
function getCurrentMonth() {
  const currentDate = new Date();
  return currentDate.getMonth(); // 0 for January, 1 for February, ..., 11 for December
}

// Set theme based on the current month if no theme is set by the user
function setThemeByMonthIfNotSet() {
  const currentMonth = getCurrentMonth();
  if (!localStorage.getItem("site_theme")) {
    if (currentMonth === 0) {
      setTheme("newyear"); // January
    } else if (currentMonth === 1) {
      setTheme("valentines"); // February
    } else if (currentMonth === 5) {
      setTheme("pride"); // June
    } else if (currentMonth === 9) {
      setTheme("halloween"); // October
    } else if (currentMonth === 11) {
      setTheme("christmas"); // December
    }
  }
}

// Event listener for mode change
themeSelect.addEventListener("change", function () {
  const selectedValue = themeSelect.value;
  if (themes[selectedValue]) {
    setTheme(selectedValue);
  }
});

// Automatically set the theme based on the current month if not set by the user
setThemeByMonthIfNotSet();

// >> To remember the theme you picked last
// >> Get the theme from local storage, default to "light" if not found
const storedTheme = localStorage.getItem("site_theme") || "light";

// Set the theme based on the user's preference
function setThemeRepeat(theme) {
  if (themes[theme]) {
    setTheme(theme);
    themeSelect.value = theme;
  }
}

// Set the theme based on the user's preference
setThemeRepeat(storedTheme);
