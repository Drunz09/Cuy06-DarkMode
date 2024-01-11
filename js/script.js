const mainBackground = document.querySelector("main");
const info = document.querySelector("#info");
const mode = document.querySelector("#mode");
const home = document.querySelector("#home");
const berserk = document.querySelector("#berserk");

const darkLimit = 5;
let darkCounter = 0;
let darkRemaining = 5;

function darkMode() {
  darkCounter++;
  darkRemaining--;
  if (darkCounter <= darkLimit) {
    mainBackground.classList.toggle("dark");
    mainBackground.classList.remove("berserk");
    if (darkRemaining > 0) {
      info.textContent = ` Sisa berganti mode anda tinggal ${darkRemaining}`;

      if (mainBackground.classList.contains("dark") == true) {
        mode.textContent = "change - Light";
        berserk.textContent = "Berserk Mode";
      } else {
        mode.textContent = "change - Dark";
        berserk.textContent = "Berserk Mode";
      }
    } else {
      info.textContent = ` Sisa berganti mode anda sudah habis `;

      mode.style.display = "none";
      berserk.style.display = "none";
      home.textContent = "RESTART";
    }
  }
}

function berserkMode() {
  darkCounter++;
  darkRemaining--;
  if (darkCounter <= darkLimit) {
    mainBackground.classList.toggle("berserk");

    if (darkRemaining > 0) {
      info.textContent = ` Sisa berganti mode anda tinggal ${darkRemaining}`;

      if (mainBackground.classList.contains("berserk") == true) {
        berserk.textContent = "OFF";
      } else {
        berserk.textContent = "Berserk Mode";
      }
    } else {
      info.textContent = ` Sisa berganti mode anda sudah habis `;

      berserk.style.display = "none";
      mode.style.display = "none";
      home.textContent = "RESTART";
    }
  }
}

function reRender() {
  if (home.textContent == "RESTART") {
    location.reload();
  }
}
