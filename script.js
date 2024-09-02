document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let cartItem = document.querySelector('.cart-items-container');

    let menuBtn = document.querySelector('#menu-btn');
    let searchBtn = document.querySelector('#search-btn');
    let cartBtn = document.querySelector('#cart-btn');

    // Debugging: Log elements to check if they exist
    console.log('navbar:', navbar);
    console.log('searchForm:', searchForm);
    console.log('cartItem:', cartItem);
    console.log('menuBtn:', menuBtn);
    console.log('searchBtn:', searchBtn);
    console.log('cartBtn:', cartBtn);

    if (menuBtn) {
        menuBtn.onclick = () => {
            if (navbar) navbar.classList.toggle('active');
            if (searchForm) searchForm.classList.remove('active');
            if (cartItem) cartItem.classList.remove('active');
        };
    } else {
        console.warn('menuBtn not found');
    }

    if (searchBtn) {
        searchBtn.onclick = () => {
            if (searchForm) searchForm.classList.toggle('active');
            if (navbar) navbar.classList.remove('active');
            if (cartItem) cartItem.classList.remove('active');
        };
    } else {
        console.warn('searchBtn not found');
    }

    if (cartBtn) {
        cartBtn.onclick = () => {
            if (cartItem) cartItem.classList.toggle('active');
            if (navbar) navbar.classList.remove('active');
            if (searchForm) searchForm.classList.remove('active');
        };
    } else {
        console.warn('cartBtn not found');
    }

    window.onscroll = () => {
        if (navbar) navbar.classList.remove('active');
        if (searchForm) searchForm.classList.remove('active');
        if (cartItem) cartItem.classList.remove('active');
    };
});
