document.addEventListener("DOMContentLoaded", function() {
    
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with ID '${sectionId}' not found.`);
        }
    };

   
    const aboutUsIcon = document.querySelector('.icon:nth-child(1)');
    aboutUsIcon.addEventListener('click', () => scrollToSection('about-us'));

    const previousEventsIcon = document.querySelector('.icon:nth-child(2)');
    previousEventsIcon.addEventListener('click', () => scrollToSection('previous-events'));

    const upcomingEventsIcon = document.querySelector('.icon:nth-child(3)');
    upcomingEventsIcon.addEventListener('click', () => scrollToSection('upcoming-events'));
});


   