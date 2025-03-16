document.addEventListener("DOMContentLoaded", function () {
    const banners = document.querySelectorAll(".banner-dicas");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    banners.forEach(banner => {
        observer.observe(banner);
    });
});

