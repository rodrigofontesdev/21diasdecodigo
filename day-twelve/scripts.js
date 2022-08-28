const myGallery = document.getElementById("myGallery");
const galleryCarousel = myGallery.getElementsByClassName("gallery-carousel")[0];
const images = myGallery.querySelectorAll("figure");
const modal = document.getElementsByClassName("modal")[0];
const galleryWidth = myGallery.offsetWidth;
const galleryHeight = galleryCarousel.offsetHeight;
const imagesPerView = 4;
const setImageWidth = galleryWidth / imagesPerView;
let currentImage = imagesPerView;

const gallery = (element) => {
  const closeModal = document.getElementsByClassName("backdrop")[0];

  adjustImagesInGallery(element);

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      openImageModal(index);
    });
  });

  closeModal.addEventListener("click", () => {
    closeImageModal();
  });
};

const adjustImagesInGallery = () => {
  galleryCarousel.style.height = galleryHeight + "px";

  Array.from(images).map((image, index) => {
    image.style.cssText = `
        width: ${setImageWidth}px;
        height: ${galleryHeight}px;
        position: absolute;
        top: 0;
        left: ${setImageWidth * index}px;
    `;
  });
};

const navigationPrevNext = (index) => {
  if (index === 1) {
    currentImage++;

    if (currentImage >= images.length) {
      currentImage = images.length;
    }
  } else if (index === -1) {
    currentImage--;

    if (currentImage <= imagesPerView) {
      currentImage = imagesPerView;
    }
  } else {
    return;
  }

  galleryCarousel.style.transform = `translateX(-${
    setImageWidth * (currentImage - imagesPerView)
  }px)`;
};

const openImageModal = (index) => {
  const modalContent = modal.getElementsByClassName("modal-content")[0];
  const clickedImage = images[index].getElementsByTagName("img")[0];
  const clickedImageCaption =
    images[index].getElementsByTagName("figcaption")[0];

  if (!modal.classList.contains("show")) {
    const figure = modalContent.appendChild(document.createElement("figure"));

    figure.appendChild(clickedImage.cloneNode(true));
    figure.appendChild(clickedImageCaption.cloneNode(true));

    modal.classList.add("show");
  }
};

const closeImageModal = () => {
  const modalContent = modal.getElementsByClassName("modal-content")[0];

  if (modal.classList.contains("show")) {
    modal.classList.remove("show");

    modalContent.innerHTML = "";
  }
};

gallery(myGallery);
