document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu li");
    const hoverImage = document.getElementById("hover-image");

    menuItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            const imageUrl = item.getAttribute("data-image");
            hoverImage.style.backgroundImage = url(${imageUrl});
            hoverImage.style.display = "block";
            hoverImage.style.top = ${item.getBoundingClientRect().top}px;
            hoverImage.style.left = ${item.getBoundingClientRect().right + 10}px;
        });

        item.addEventListener("mouseout", function() {
            hoverImage.style.display = "none";
        });
    });
});