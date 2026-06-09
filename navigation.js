const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <nav>
    <h2>Divhani Thiba</h2>

     <button id="hamburger-btn">
        <span></span>
        <span></span>
        <span></span>
        </button>

  <ul id="nav-links">
    <li><a href="index.html"    class="nav-link">Home</a></li>
    <li><a href="about.html"    class="nav-link">About</a></li>
    <li><a href="projects.html" class="nav-link">Projects</a></li>
    <li><a href="contact.html"  class="nav-link">Contact</a></li>
</ul>

        <button id="theme-toggle">🌙</button>
    </nav>
`;


const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks     = document.getElementById("nav-links");
const navMenu= document.querySelector("nav-menu");



hamburgerBtn.addEventListener("click", function() {
    hamburgerBtn.classList.toggle("open");
    navLinks.classList.toggle("open");
});


document.querySelectorAll(".nav-link").forEach(function(link) {
    link.addEventListener("click", function() {
        hamburgerBtn.classList.remove("open");
        navLinks.classList.remove("open");
    });
}); 

//this code greays out the navigation buttons when the page isnt active and sets the active link based on the current page. It also ensures that the menu closes when a link is clicked or when the user scrolls back to the top.
function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-link").forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}

setActiveLink();
