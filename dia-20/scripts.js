const apiKey = "90082a0392331e53d0a2e50184c192a84a59be07";
const apiBaseUrl = "https://emoji-api.com";
const emojiListElement = document.getElementById("emojis");
const emojisElement = document.getElementsByClassName("code");
const formElement = document.getElementById("search-emoji");
const searchElement = document.getElementById("search");
const tooltipElement = document.getElementById("tooltip");
let emojis = [];

document.addEventListener("DOMContentLoaded", async () => {
  await getEmojis();

  Object.entries(emojisElement).map(([index, emoji]) => {
    emoji.addEventListener("click", (event) => {
      tooltipElement.classList.toggle("show");

      copyToClipboard(event.target);
    });
  });
});

formElement.onsubmit = async (event) => {
  event.preventDefault();

  await searchEmoji(searchElement.value);

  Object.entries(emojisElement).map(([index, emoji]) => {
    emoji.addEventListener("click", (event) => {
      tooltipElement.classList.toggle("show");

      copyToClipboard(event.target);
    });
  });
};

async function getEmojis() {
  try {
    let response = await fetch(`${apiBaseUrl}/emojis?access_key=${apiKey}`);

    const data = await response.json();

    data.map((emoji) => {
      const emojiData = {
        character: emoji.character,
        name: emoji.unicodeName,
      };

      emojis.push(emojiData);
    });

    loadEmojis();
  } catch (error) {
    console.error("Erro:", error);
  }
}

async function searchEmoji(value) {
  try {
    let response = await fetch(
      `${apiBaseUrl}/emojis?search=${value}&access_key=${apiKey}`
    );

    const data = await response.json();
    let newEmojis = [];

    if (data) {
      data.map((emoji) => {
        const emojiData = {
          character: emoji.character,
          name: emoji.unicodeName,
        };

        newEmojis.push(emojiData);
      });

      emojis = newEmojis;
      emojiListElement.innerHTML = "";

      loadEmojis();
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}

function setEmoji(emoji) {
  const emojiElement = document.createElement("li");
  const emojiCode = document.createElement("span");
  const emojiName = document.createElement("span");

  emojiElement.classList.add("emoji");
  emojiCode.classList.add("code");

  emojiCode.innerHTML = emoji.character;
  emojiName.innerHTML = emoji.name;

  emojiElement.append(emojiCode, emojiName);
  emojiListElement.append(emojiElement);
}

async function copyToClipboard(emoji) {
  navigator.clipboard.writeText(emoji.innerHTML).then(
    () => {
      tooltipElement.classList.add("show");
    },
    (error) => {
      console.error("Erro: não foi possível copiar! ", error);
    }
  );
}

function loadEmojis() {
  emojis.map((emoji) => {
    setEmoji(emoji);
  });
}
