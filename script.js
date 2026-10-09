
/* ========================================
   SABA NAZ — PORTFOLIO JAVASCRIPT
   ======================================== */

// 1. Select Theme Toggle Elements
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

// 2. Select Footer Year Element
const yearElement = document.getElementById("year");

// 3. Update Footer Year Automatically
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 4. Apply Theme
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  const isDark = theme === "dark";

  if (themeIcon) {
    themeIcon.textContent = isDark ? "☀️" : "🌙";
  }

  if (themeLabel) {
    themeLabel.textContent = isDark ? "Light Mode" : "Dark Mode";
  }

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  // Update browser theme color
  let themeColor = document.querySelector(
    'meta[name="theme-color"]'
  );

  if (!themeColor) {
    themeColor = document.createElement("meta");
    themeColor.name = "theme-color";
    document.head.appendChild(themeColor);
  }

  themeColor.content = isDark ? "#111116" : "#faf9f6";
}

// 5. Load Saved Theme
function getSavedTheme() {
  try {
    return localStorage.getItem("portfolio-theme");
  } catch (error) {
    return null;
  }
}

const savedTheme = getSavedTheme();

applyTheme(savedTheme === "dark" ? "dark" : "light");

// 6. Toggle Between Light and Dark Mode
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);

    // Remember user's preference
    try {
      localStorage.setItem("portfolio-theme", newTheme);
    } catch (error) {
      // Theme still works if browser storage is unavailable.
    }
  });
}