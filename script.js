const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function(event){
        navItems.forEach(nav => {
            nav.style.color='';
        });
        this.style.color='white';
        const targetSectionId = this.getAttribute('href');
        DocumentTimeline.querySelector(targetSectionId).scrollIntoView({
            behavior: 'smooth'
        });
        event.preventDefault();
    });
});