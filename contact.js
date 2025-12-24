
const form = document.getElementById("contactForm");
const thankYouMsg = document.getElementById("thankYouMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    form.style.display = "none";      
    thankYouMsg.style.display = "block"; 
});
