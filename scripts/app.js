const mofinderSections = document.querySelectorAll(".mofinder-section");
const sectionNavigatorButtons = document.querySelectorAll('.section-navigator-button');
//const debugTitle = document.querySelector(".a");

async function scrollToSection(sectionId) {
    const newSection = document.getElementById(sectionId);

    if (newSection) {
        setTimeout(() => {
            newSection.scrollIntoView({behavior: 'smooth'})
        }, 150)
    };
};

function adjustSectionWithinToolBar() {
    const visibleArea = window.innerHeight;
    const newAdaptedSectionSize = `${visibleArea - ((visibleArea * 8) / 100)}px`;
    
    mofinderSections.forEach(section => {
        section.style.height = newAdaptedSectionSize
    });

    //debugTitle.textContent = `Visible: ${visibleArea}px | Section: ${newAdaptedSectionSize}`;
};

adjustSectionWithinToolBar();
window.addEventListener('resize', adjustSectionWithinToolBar);