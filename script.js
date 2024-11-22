// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Add Event Listener for Button Interaction
document.querySelectorAll("a.btn").forEach(button => {
    button.addEventListener("mouseover", function () {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.3s ease-in-out";
    });

    button.addEventListener("mouseout", function () {
        button.style.transform = "scale(1)";
    });
});

// Button Like: SweetAlert2 Pop-Up
document.getElementById("likeButton").addEventListener("click", function () {
    Swal.fire({
        title: "Terima Kasih!",
        text: "Senang mendengar bahwa Anda menyukai website ini 😊",
        icon: "success",
        confirmButtonText: "Sama-sama!",
    });
});

// Button Dislike: SweetAlert2 Pop-Up
document.getElementById("dislikeButton").addEventListener("click", function () {
    Swal.fire({
        title: "Oh Tidak!",
        text: "Kami akan berusaha memperbaiki pengalaman Anda. Mohon beri masukan Anda! 😔",
        icon: "error",
        confirmButtonText: "Baiklah",
    });
});

// Hire Me Button Pop-Up
document.querySelector(".btn-outline-light").addEventListener("click", function (e) {
    e.preventDefault();
    // Using SweetAlert2 for Modern Pop-Up
    Swal.fire({
        title: "Hire Me",
        text: "Thank you for considering me! Please contact me at your-email@example.com.",
        icon: "success",
        confirmButtonText: "Got it!",
        
    });
});
