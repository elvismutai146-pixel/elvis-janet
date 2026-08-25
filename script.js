// ================================
// OPEN OUR STORY
// ================================

function openStory() {

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const website =
        document.getElementById("website");

    welcomeScreen.style.display = "none";

    website.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================================
// LOVE COUNTER
// ================================

const startDate = new Date("November 25, 2025 00:00:00").getTime();

function updateCounter() {

    const now = new Date().getTime();

    const difference = now - startDate;

    if (difference < 0) {
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();

setInterval(updateCounter, 1000);


// ================================
// FLOATING HEARTS
// ================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💘",
        "💞"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 7000);

}

setInterval(createHeart, 700);


// ================================
// PHOTO CLICK EFFECT
// ================================

const photos = document.querySelectorAll(".photo-card img");

photos.forEach(function(photo) {

    photo.addEventListener("click", function() {

        this.style.transform = "scale(1.05)";

        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 300);

    });

});
/* 🌸 FLOATING FLOWERS */

const flowerContainer = document.getElementById("flower-container");

const flowers = ["🌸", "🌷", "🌹", "🌺", "💮", "🌼"];

function createFlower() {

    const flower = document.createElement("div");

    flower.classList.add("floating-flower");

    flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize =
        (18 + Math.random() * 18) + "px";

    flower.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    flowerContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);
}

setInterval(createFlower, 700);
