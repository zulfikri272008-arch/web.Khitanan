const output = document.querySelector(".timer");

const targetDate = new Date("23 Mar, 2026 00:00:00").getTime();

const interval = setInterval(() => {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secconds = Math.floor((distance % (1000 * 60)) / 1000);

    output.innerHTML = days + "d " + hours + "h " + minutes + "m " + secconds + "s ";

    if (distance < 0) {
        clearInterval(interval);
        output.innerHTML = "Welcome!";
        output.style.textTranform ="uppercase";

    }
}, 1000);