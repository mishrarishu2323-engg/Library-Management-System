document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuButton = document.querySelector(".mobile-menu-btn");

    if (!sidebar || !menuButton) return;

    function pinMenuButton() {
        const rect = menuButton.getBoundingClientRect();

        menuButton.style.position = "fixed";
        menuButton.style.top = rect.top + "px";
        menuButton.style.left = rect.left + "px";
        menuButton.style.zIndex = "1102";
    }

    function unpinMenuButton() {
        menuButton.style.removeProperty("position");
        menuButton.style.removeProperty("top");
        menuButton.style.removeProperty("left");
        menuButton.style.removeProperty("z-index");
    }

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();

        if (sidebar.classList.contains("active")) {
            sidebar.classList.remove("active");
            unpinMenuButton();
        } else {
            pinMenuButton();
            sidebar.classList.add("active");
        }
    });

    document.addEventListener("click", function (event) {
        if (
            window.innerWidth <= 768 &&
            sidebar.classList.contains("active") &&
            !sidebar.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            sidebar.classList.remove("active");
            unpinMenuButton();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            sidebar.classList.remove("active");
        }
    });
});
