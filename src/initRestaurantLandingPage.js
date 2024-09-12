import createAboutSection from './about.js';
import createMenuSection from './menu.js';
import createContactSection from './contact.js';
import { createHeader, showSection } from './header.js';

function createMain() {
    const main = document.createElement('main');
    main.appendChild(createAboutSection((section) => showSection(section)));
    main.appendChild(createMenuSection());
    main.appendChild(createContactSection());
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; 2024 Flavor Haven. All rights reserved.</p>';
    return footer;
}

function createLandingPage() {
    const content = document.getElementById('content');
    
    const header = createHeader();
    const main = createMain();
    const footer = createFooter();
    
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}

function initRestaurantLandingPage() {
    createLandingPage();
    showSection('home');  // Show home page by default
    console.log('Restaurant Landing Page initialized');
}

export default initRestaurantLandingPage;
