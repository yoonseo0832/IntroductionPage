document.addEventListener("DOMContentLoaded", function(){
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const mainLink = document.querySelector('.nav-link[href="#main"]');
    if(mainLink){
        mainLink.classList.add("active");
        mainLink.style.color = "blue";
        
        const mainSection = document.querySelector("#main");
        if(mainSection){
            window.scrollTo({
                top: mainSection.offsetTop -70,
                behavior:'smooth'
            });
        }
    }
    window.addEventListener("scroll", function(){
        let currentSection="";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollY = window.pageYOffset;

            if(scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight){
                currentSection = section.getAttribute("id");
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove("active");
            link.style.color = "grey";
        });
        if(currentSection){
            const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
            if(activeLink){
                activeLink.classList.add("active");
                activeLink.style.color = "blue";
            }
        }
    });
    navLinks.forEach(function(link){
        link.addEventListener("click", function(){
            navLinks.forEach((nav) => {
                nav.classList.remove("active");
                nav.style.color = "grey";
            });
            this.classList.add("active");
            this.style.color = "blue";
        });
    });
});