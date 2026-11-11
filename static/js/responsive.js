document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuButton = document.querySelector(".mobile-menu-btn");

    if (!sidebar || !menuButton) return;

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        sidebar.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (
            window.innerWidth <= 768 &&
            sidebar.classList.contains("active") &&
            !sidebar.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            sidebar.classList.remove("active");
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            sidebar.classList.remove("active");
        }
    });
});
