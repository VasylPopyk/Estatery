const headerBurger = document.querySelector('.header_burger');
const headerMenu = document.querySelector('.header_menu');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
});

// Отримуємо всі елементи меню з випадаючими списками
const headerItemsFront = document.querySelectorAll('.header_menu_item_front');

headerItemsFront.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.stopPropagation(); // Зупиняємо подію, щоб не закривалося меню при натисканні
        const parentItem = item.parentElement; // Отримуємо батьківський елемент
        parentItem.classList.toggle('active'); // Додаємо/знімаємо клас active
    });
});

// Закриваємо всі меню при натисканні поза меню
document.addEventListener('click', () => {
    headerItemsFront.forEach((item) => {
        item.parentElement.classList.remove('active');
    });
});


const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Знімаємо клас "active" з усіх кнопок і контенту
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Додаємо клас "active" для вибраної кнопки та відповідного контенту
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(`tab-${tabId}`).classList.add('active');
    });
});