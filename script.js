const cards = document.getElementById("cards");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
    cards.scrollBy({
        left: 220,
        behavior: "smooth"
    });
});

prev.addEventListener("click", () => {
    cards.scrollBy({
        left: -220,
        behavior: "smooth"
    });
});