const countdown = (end) => {
  const getFutureTime = new Date(end).getTime();

  let count = setInterval(() => {
    const now = new Date().getTime();

    const distance = getFutureTime - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const dayEl = document.getElementById("day");
    const hourEl = document.getElementById("hour");
    const minuteEl = document.getElementById("minute");
    const secondEl = document.getElementById("second");

    dayEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;

    if (distance < 0) {
      clearInterval(count);

      dayEl.innerHTML = "--";
      hourEl.innerHTML = "--";
      minuteEl.innerHTML = "--";
      secondEl.innerHTML = "--";
    }
  }, 1000);
};

countdown("2023-12-10 10:00:00");
