const menuBtn = document.querySelector('.menu-btn');
const dropdown = document.querySelector('.dropdown');

menuBtn.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});


window.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
        dropdown.style.display = 'none';
    }
});