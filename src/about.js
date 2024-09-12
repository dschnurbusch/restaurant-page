function createAboutSection(onNavigate) {
    const about = document.createElement('section');
    about.className = 'about';
    
    const aboutContent = document.createElement('div');
    aboutContent.className = 'about-content';
    
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Welcome to Flavor Haven';
    
    const heroSubtitle = document.createElement('p');
    heroSubtitle.textContent = 'Where Every Bite Tells a Story';
    
    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'Our Story';
    
    const aboutText = document.createElement('p');
    aboutText.textContent = 'At Flavor Haven, we believe in the power of food to bring people together. Our chefs craft each dish with passion, using only the freshest local ingredients to create unforgettable culinary experiences.';
    
    const ctaButton = document.createElement('button');
    ctaButton.textContent = 'Explore Our Menu';
    ctaButton.className = 'cta-button';
    ctaButton.addEventListener('click', () => onNavigate('menu'));
    
    aboutContent.appendChild(heroTitle);
    aboutContent.appendChild(heroSubtitle);
    aboutContent.appendChild(aboutTitle);
    aboutContent.appendChild(aboutText);
    aboutContent.appendChild(ctaButton);
    about.appendChild(aboutContent);
    
    return about;
}

export default createAboutSection;
