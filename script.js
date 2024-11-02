
        // Wait for the window to load completely
        window.addEventListener("load", function() {
            // Hide the loading screen
            document.getElementById("loading-screen").style.display = "none";
            
            // Show the main content
            document.getElementById("main-content").style.display = "block";
        });

// Carousel functionality for reviews
const reviewItems = document.querySelectorAll(".review-item");

function showReviewItem(index) {
    reviewItems.forEach((item, i) => {
        item.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

document.querySelector(".carousel-control-prev").onclick = () => {
    reviewIndex = (reviewIndex - 1 + reviewItems.length) % reviewItems.length;
    showReviewItem(reviewIndex);
};

document.querySelector(".carousel-control-next").onclick = () => {
    reviewIndex = (reviewIndex + 1) % reviewItems.length;
    showReviewItem(reviewIndex);
};

// Lightbox functionality
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
        const img = item.querySelector("img"); // Find the image within the .gallery-item
        if (img) {
            lightbox.classList.add("active");
            lightbox.innerHTML = `<img src="${img.src}">`;
        }
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});


