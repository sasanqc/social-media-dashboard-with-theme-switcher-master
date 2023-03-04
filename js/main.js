const toggleBtn = document.getElementById("toggle-checkbox");

toggleBtn.addEventListener("change", (e) => {
  console.log(e.target.checked);
  if (e.target.checked) {
    setLightMode();
  } else {
    setDarkMode();
  }
});

const setDarkMode = () => {
  document.querySelector("body").classList = "dark";
  localStorage.setItem("colorMode", "dark");
};

const setLightMode = () => {
  document.querySelector("body").classList = "light";
  localStorage.setItem("colorMode", "light");
};

if (localStorage.getItem("colorMode") === "light") {
  setLightMode();
  toggleBtn.checked = true;
} else {
  setDarkMode();
  toggleBtn.checked = false;
}
