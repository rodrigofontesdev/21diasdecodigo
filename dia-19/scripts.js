const apiBaseUrl = "https://api.unsplash.com";
const apiAccessKey = "XsvUe3C4lQsMlnw_dmyevWAEvmcDI-ckHqMZ2-Qyt3c";
const referral = "?utm_source=rocket-photos&utm_medium=referral";
const unsplashLink = "https://unsplash.com/" + referral;
const maxPhotoQuantity = 24;
const galleryElement = document.getElementById("gallery");
const photos = [];

async function getPhotos(photosQuantity) {
  try {
    const response = await fetch(
      `${apiBaseUrl}/photos/random/?count=${photosQuantity}`,
      {
        headers: {
          "Accept-Version": "v1",
          "Content-Type": "application/json",
          Authorization: "Client-ID " + apiAccessKey,
        },
      }
    );

    const data = await response.json();

    data.map((item) => {
      const photo = {
        url: item.urls.small_s3,
        author: item.user.name,
        authorPage: item.user.links.html,
      };

      photos.push(photo);
    });
  } catch (error) {
    console.log("Erro:", error);
  }
}

function setPhoto(photo) {
  const photoElement = document.createElement("figure");
  const imageElement = document.createElement("img");
  const captionElement = document.createElement("figcaption");

  photoElement.classList.add("photo");

  imageElement.setAttribute("src", photo.url);
  imageElement.setAttribute("loading", "lazy");
  imageElement.setAttribute(
    "alt",
    `Imagem aleatória enviada por ${photo.author}`
  );

  captionElement.innerHTML = `Photo by <a href="${photo.authorPage}${referral}" target="_blank">${photo.author}</a> on 
    <a href="${unsplashLink}" target="_blank">Unsplash</a>`;

  photoElement.append(imageElement, captionElement);
  galleryElement.appendChild(photoElement);
}

async function loadPhotos() {
  await getPhotos(maxPhotoQuantity);

  photos.map((photo) => {
    setPhoto(photo);
  });
}

loadPhotos();
