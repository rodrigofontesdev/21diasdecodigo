const loader = () => {
  const progressBar = document.getElementsByClassName("progress")[0];

  let width = 1;
  let count = setInterval(doProgress, 150);

  function doProgress() {
    if (width >= 100) {
      clearInterval(count);
    } else {
      width++;

      progressBar.style.width = `${width}%`;

      if (width === 100) {
        progressBar.classList.add("loaded");
      }
    }
  }
};

loader();
