let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.getElementById("style").style.top = "-50px";
    } else {
        // Scroll up
        document.getElementById("style").style.top = "0";
    }
    lastScrollTop = currentScroll;
});
