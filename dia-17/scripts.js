document.addEventListener("keydown", (event) => {
  let key = event.key;
  let type = event.type;

  switch (key) {
    case " ":
      key = "Space";
      break;
    case "F5":
      key = "";
      type = "";
      break;
  }

  insertKey(key, type);
});

document.addEventListener("keyup", (event) => {
  let key = event.key;
  let type = event.type;

  switch (key) {
    case " ":
      key = "Space";
      break;
    case "F5":
      key = "";
      type = "";
      break;
  }

  insertKey(key, type);
});

function insertKey(key, event) {
  const keyElement = document.getElementById("key");
  const eventElement = document.getElementById("event");

  if (key && event) {
    keyElement.innerHTML = key;
    eventElement.innerHTML = event;
  }
}
