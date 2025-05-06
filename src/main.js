import './style.css'

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');

    if (menu.classList.contains('flex')) {
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    } else {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    }
});