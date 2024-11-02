// Selecting elements that need touch compatibility
const elements = document.querySelectorAll('.your-clickable-element');

elements.forEach(element => {
    // Adding click event listener
    element.addEventListener('click', handleClick);
    
    // Adding touchstart and touchend event listeners for iOS compatibility
    element.addEventListener('touchstart', handleClick);
    element.addEventListener('touchend', handleClick);
});

function handleClick(event) {
    // Your existing click handling code here
    event.preventDefault();
    console.log("Element clicked or tapped!");
}

        // Wait for the window to load completely
        window.addEventListener("load", function() {
            // Hide the loading screen
            document.getElementById("loading-screen").style.display = "none";
            
            // Show the main content
            document.getElementById("main-content").style.display = "block";
        });

        document.addEventListener("DOMContentLoaded", function() {
            const overlay = document.getElementById("overlay");
            const navbarToggler = document.querySelector(".navbar-toggler");
            const navbarCollapse = document.getElementById("navbarNavAltMarkup");
        
            // Show the overlay and prevent scrolling when the menu is open
            navbarToggler.addEventListener("click", function() {
                overlay.classList.toggle("active");
                navbarCollapse.classList.toggle("show");
                document.body.classList.toggle("no-scroll");
            });
        
            // Hide the overlay and enable scrolling when clicking outside the menu
            overlay.addEventListener("click", function() {
                overlay.classList.remove("active");
                navbarCollapse.classList.remove("show");
                document.body.classList.remove("no-scroll");
            });
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


