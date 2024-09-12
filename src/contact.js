function createContactSection() {
    const contact = document.createElement('section');
    contact.className = 'contact';
    contact.style.display = 'none';

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    contact.appendChild(contactTitle);

    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
        <p>Address: 123 Flavor Street, Foodville, FC 12345</p>
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@flavorhaven.com</p>
    `;
    contact.appendChild(contactInfo);

    return contact;
}

export default createContactSection;
