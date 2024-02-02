document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('#calculator button');

    let currentValue = '0';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.textContent === '=') {
                try {
                    currentValue = eval(currentValue).toString();
                } catch (error) {
                    currentValue = 'Error';
                }
            } else {
                currentValue += button.textContent;
            }

            display.textContent = currentValue;
        });
    });
});
