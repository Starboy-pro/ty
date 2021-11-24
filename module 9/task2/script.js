const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Предназначен для вывода информации в консоль')
})

const Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
    alert('Предназначен для вывода информации в окне в браузере с некоторой информацией')
})

const Prompt = document.querySelector('#Prompt');

Prompt.addEventListener('click', () => {
    alert('Предназначен для ввода информации в окне в браузере')
})