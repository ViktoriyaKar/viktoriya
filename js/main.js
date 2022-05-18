const form = document.querySelector('.form');
const button = document.querySelector('button[type="submit"]');

// это первый элемент в форме (ввод текста)
const inputElement = document.querySelector('input');

inputElement.addEventListener('input', function(evt) {
    console.log(evt.target.value);
});

const clientName = document.querySelector('.name');
const result = document.querySelector('.result');

console.dir(result);

button.addEventListener('click', function(evt) {
    evt.preventDefault(); // отменяю стандартное поведение формы при нажатии на кнопку

    clientName.textContent = inputElement.value;
    result.textContent = 'Форма отправлена'; // Меняем тсвойство в переменной
});