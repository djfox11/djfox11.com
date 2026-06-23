async function includeHTML(id, file) {
    const element = document.getElementById(id);
    const response = await fetch(file);
    element.innerHTML = await response.text();

    if (id === "site-header") {
        setActiveNav();
    }
}

function setActiveNav() {
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }
    });
}

function setActiveNav() {
    const path = window.location.pathname;

    document.querySelectorAll("nav a").forEach(link => {
        const href = link.getAttribute("href");

        if (
            href === "/" && path === "/" ||
            href !== "/" && path.startsWith(href)
        ) {
            link.classList.add("active");
        }
    });
}

includeHTML("site-header", "/assets/components/header.html");
includeHTML("site-footer", "/assets/components/footer.html");