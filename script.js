var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "160px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded successfully!");
});

// Show or hide the scroll-top button based on scroll position
window.addEventListener('scroll', function() {
    const scrollTopButton = document.querySelector('.scroll-top');
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Smooth scroll to top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
const cartList = document.querySelector('.cart-list');
const addButtons = document.querySelectorAll('.add');

addButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const item = event.target.closest('.item');
        const title = item.querySelector('.title').innerText;
        const price = item.querySelector('.price').innerText;
        const count = item.querySelector('.count').value;

        addToCart(title, price, count);
    });
});

function addToCart(title, price, count) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <strong>${title}</strong> - ${price}

