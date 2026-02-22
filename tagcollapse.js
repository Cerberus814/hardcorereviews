const toggleTagsBtn = document.getElementById("toggleTags");
const tagsFilter = document.getElementById("tagsFilter");

toggleTagsBtn.addEventListener("click", () => {
    const isOpen = tagsFilter.classList.toggle("open");

    toggleTagsBtn.innerHTML = isOpen
        ? "❌ Close"
        : "🔍 Tag Filter";
});
