let passwordRange = 12;
let uppercaseIsActive = true;
let lowercaseIsActive = true;
let numberIsActive = true;
let symbolIsActive = true;
const lowercaseStrings = "abcdefghijklmnopqrstuvwxyz";
const uppercaseStrings = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "01234567890123456789";
const symbols = "!@#$%&*^!@#$%&*^";
const passwordElement = document.getElementById("pass_generator");
const copyElement = document.getElementById("copy");
const refreshElement = document.getElementById("refresh");
const passwordRangeElement = document.getElementById("pass_range");

passwordRangeElement.addEventListener("change", (event) => {
  setpasswordRange(event.target.value);
});

refreshElement.addEventListener("click", () => {
  refresh();
});

copyElement.addEventListener("click", () => {
  copyToClipboard();
});

function passGenerator() {
  let chars = "";
  let generatedPassword = "";

  if (lowercaseIsActive) {
    chars += lowercaseStrings;
  }

  if (uppercaseIsActive) {
    chars += uppercaseStrings;
  }

  if (numberIsActive) {
    chars += numbers;
  }

  if (symbolIsActive) {
    chars += symbols;
  }

  for (let i = 0; i < passwordRange; i++) {
    generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordElement.value = generatedPassword;
}

function copyToClipboard() {
  passwordElement.select();

  navigator.clipboard.writeText(passwordElement.value).then(
    () => {},
    (error) => {
      console.error("Erro: não foi possível copiar! ", error);
    }
  );
}

function refresh() {
  refreshElement.classList.add("spin");

  passGenerator();

  const stop = setInterval(() => {
    refreshElement.classList.remove("spin");

    clearInterval(stop);
  }, 400);
}

function setpasswordRange(value) {
  if (value <= 50) {
    passwordRange = value;
  }

  return;
}

function enableDisablePassOptions(option) {
  const checkboxes = [...document.querySelectorAll('input[type="checkbox"]')];
  const disabledCheckboxes = [];

  checkboxes.map((checkbox) => {
    !checkbox.checked ? disabledCheckboxes.push(checkbox) : "";
  });

  // Verificando se o usuário está tentando desmarcar todas as oções
  if (disabledCheckboxes.length >= 4) {
    if (!option.checked) {
      option.checked = true;
    }
  }

  const currentOption = option.getAttribute("name");

  switch (currentOption) {
    case "pass_uppercase":
      uppercaseIsActive = option.checked;
      break;
    case "pass_lowercase":
      lowercaseIsActive = option.checked;
      break;
    case "pass_numbers":
      numberIsActive = option.checked;
      break;
    case "pass_symbols":
      symbolIsActive = option.checked;
      break;
  }
}

passGenerator();
