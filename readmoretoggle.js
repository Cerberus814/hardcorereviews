const readMoreBtn = document.getElementById("readMoreBtn");
const readMoreContent = document.getElementById("readMoreContent");

readMoreBtn.addEventListener("click", () => {
    const isOpen = readMoreContent.classList.toggle("open");

    readMoreBtn.innerHTML = isOpen
        ? "❌ Close"
        : "🔍 Leer más";
});
