function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    
    const pages = ['Home', 'Menu', 'Contact'];
    
    pages.forEach(page => {
        const button = document.createElement('button');
        button.textContent = page;
        button.addEventListener('click', () => showSection(page.toLowerCase()));
        nav.appendChild(button);
    });
    
    header.appendChild(nav);
    return header;
}

function showSection(sectionClass) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        if (section.classList.contains(sectionClass) || 
            (sectionClass === 'home' && (section.classList.contains('hero') || 
                                        section.classList.contains('about') || 
                                        section.classList.contains('features')))) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

export { createHeader, showSection };
