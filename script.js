document.addEventListener("DOMContentLoaded", () => {
    const gridBtn = document.getElementById("view-grid");
    const feedBtn = document.getElementById("view-feed");
    const gridContainer = document.getElementById("grid-container");
    const feedContainer = document.getElementById("feed-container");

    gridBtn.addEventListener("click", (e) => {
        e.preventDefault();
        gridContainer.classList.remove("d-none");
        feedContainer.classList.add("d-none");
        gridBtn.classList.add("active-view");
        feedBtn.classList.remove("active-view");
    });

    feedBtn.addEventListener("click", (e) => {
        e.preventDefault();
        feedContainer.classList.remove("d-none");
        gridContainer.classList.add("d-none");
        feedBtn.classList.add("active-view");
        gridBtn.classList.remove("active-view");
    });
});