document.addEventListener("DOMContentLoaded", function(){
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function removeActiveClasses(){
        navLinks.forEach((link) => {
            link.classList.remove("active");
        });
    }
    function addActiveClass(id){
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if(activeLink){
            activeLink.classList.add("active");
        }
    }
    window.addEventListener("scoll", function(){
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(window.pageYOffset >= sectionTop - sectionHeight / 3){
                currentSection = section.getAttribute("id");
            }
        });
        removeActiveClasses();
        addActiveClass(currentSection);
    });
});