let search = document.querySelector('.search-box');
let cart = document.querySelector('.cart');
let user = document.querySelector('.user');

let searchIcon = document.querySelector('#search-icon');
let cartIcon = document.querySelector('#cart-icon');
let userIcon = document.querySelector('#user-icon');

// فتح وإغلاق البحث
searchIcon.onclick = (event) => {
    event.stopPropagation(); 
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
};

// فتح وإغلاق السلة
cartIcon.onclick = (event) => {
    event.stopPropagation();
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
};

// فتح وإغلاق واجهة المستخدم (login)
userIcon.onclick = (event) => {
    event.stopPropagation();
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
};

// إغلاق النوافذ عند النقر في مكان آخر
document.addEventListener("click", (event) => {
    if (!search.contains(event.target) && !searchIcon.contains(event.target)) {
        search.classList.remove("active");
    }
    if (!cart.contains(event.target) && !cartIcon.contains(event.target)) {
        cart.classList.remove("active");
    }
    if (!user.contains(event.target) && !userIcon.contains(event.target)) {
        user.classList.remove("active");
    }
});
