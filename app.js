const message = document.getElementById("message");
const btn = document.getElementById("button");
const meter = document.getElementById("loveMeter");

btn.addEventListener("click", function () {
    const random = Math.floor(Math.random() * 100) + 1;
    meter.style.visibility = "visible";

    if (random > 0 && random < 30) {
        meter.style.backgroundColor = "red";
        message.innerHTML = "You go with each other like oil and water - " + random + "%";
    } else if (random > 30 && random < 50) {
        meter.style.backgroundColor = "orange";
        message.innerHTML = "Show some more love - " + random + "%";
    } else if (random > 50 && random < 70) {
        meter.style.backgroundColor = "blue";
        message.innerHTML = "Your relationship resembles with Chai andd biscut- " + random + "%";
    } else {
        meter.style.backgroundColor = "green";
        message.innerHTML = "You are made for each other - " + random + "%";
    }
    meter.style.width = random + "%";
});