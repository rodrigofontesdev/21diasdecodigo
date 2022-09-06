const darkTheme = "dark";
const darkThemeText = "Good Night";
const lightTheme = "light";
const lightThemeText = "Good Morning";
const greetingsText = document.getElementsByTagName("h1")[0].innerHTML;

document.getElementsByTagName("h1")[0].innerHTML = darkThemeText;

const toggle = (e) => {
  e.checked = e.checked || false;

  if (e.checked) {
    document.body.classList.remove(darkTheme);
    document.body.classList.add(lightTheme);
    document.getElementsByTagName("h1")[0].innerHTML = lightThemeText;
    document.getElementsByTagName("img")[0].src = `./assets/${lightTheme}.png`;
  } else {
    document.body.classList.remove(lightTheme);
    document.body.classList.add(darkTheme);
    document.getElementsByTagName("h1")[0].innerHTML = darkThemeText;
    document.getElementsByTagName("img")[0].src = `./assets/${darkTheme}.png`;
  }
};
