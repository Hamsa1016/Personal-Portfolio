function toggleProjects() {
    const extra = document.querySelectorAll(".extra");
    const btn = document.querySelector(".view-more button");

    let isHidden = extra[0].style.display === "" || extra[0].style.display === "none";

    extra.forEach(card => {
        card.style.display = isHidden ? "block" : "none";
    });

    btn.innerText = isHidden ? "Show Less" : "View More Projects";
}