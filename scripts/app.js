const sectionNavigatorButtons = document.querySelectorAll('.section-navigator-button');

sectionNavigatorButtons.forEach(navigator => {
    navigator.addEventListener('click', function() {
        let navigatorSection;
        
        if (navigator.parentElement.id) {
            navigatorSection = navigator.parentElement.id;
        } else {
            navigatorSection = navigator.parentElement.parentElement.id;
        }

        const sectionID = Number(navigatorSection.match(/\d+/));
        const newSection = document.getElementById(`section${sectionID + 1}`);
        newSection.scrollIntoView({behavior: 'smooth'});
    });
});

// function ajustarAlturaSecao() {
//     const alturaViewport = window.innerHeight;
//     document.querySelectorAll('section').forEach(section => {
//         section.style.height = `${alturaViewport}px`;
//     });
// };
  
// window.addEventListener('resize', ajustarAlturaSecao);
// ajustarAlturaSecao();