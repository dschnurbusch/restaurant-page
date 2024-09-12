function createMenuSection() {
    const menu = document.createElement('section');
    menu.className = 'menu';
    menu.style.display = 'none';

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our Menu';
    menu.appendChild(menuTitle);

    const menuItems = [
        { name: 'Flavor Burst Burger', description: 'A juicy patty topped with our secret sauce', price: '$12.99' },
        { name: 'Zesty Lemon Pasta', description: 'Fresh pasta tossed in a tangy lemon sauce', price: '$14.99' },
        { name: 'Crispy Veggie Delight', description: 'A medley of seasonal vegetables, lightly fried', price: '$10.99' },
        { name: 'Decadent Chocolate Lava Cake', description: 'Rich chocolate cake with a gooey center', price: '$7.99' }
    ];

    const menuList = document.createElement('ul');
    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>${item.price}</span>
        `;
        menuList.appendChild(listItem);
    });

    menu.appendChild(menuList);

    return menu;
}

export default createMenuSection;
