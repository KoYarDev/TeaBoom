export default function weightToggle() {
    const weightBox = document.querySelector('.product-weight__toggle');
    const weightBtn = weightBox.querySelector('.product-weight__btn');
    const weightBtnText = weightBtn.querySelector('span');
    const weightItems = weightBox.querySelectorAll('.product-weight__item');


    weightBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        weightBox.classList.toggle('--active');
    });


    weightItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();

            weightItems.forEach((el) => el.classList.remove('--selected'));
            item.classList.add('--selected');

            // Подставляем выбранный вес в текст кнопки
            const selectedText = item.querySelector('span').textContent.trim();
            weightBtnText.textContent = selectedText;

            weightBox.classList.remove('--active');
        });
    });

    // 4. Закрытие списка при клике в любое другое место страницы
    document.addEventListener('click', (e) => {
        if (!weightBox.contains(e.target)) {
            weightBox.classList.remove('--active');
        }
    });

    // Задаем цены для фасовок
    const prices = {
        '100 г': { current: '326.40 ₽', old: '349.20 ₽', sku: 'арт: 01306' },
        '500 г': { current: '1432,00 ₽', old: '1646,00 ₽', sku: 'арт: 01307' },
        '1000 г': { current: '2064,00 ₽', old: '2592,00 ₽', sku: 'арт: 01308' },
        '5000 г': { current: '6320,00 ₽', old: '8710,00 ₽', sku: 'арт: 01309' }
    };

    const priceContainer = document.querySelector('.product-variants__price');
    const skuElement = document.querySelector('.product-variants__sku');

    weightItems.forEach((item) => {
        item.addEventListener('click', () => {
            const selectedWeight = item.querySelector('span').textContent.trim();
            if (prices[selectedWeight]) {
                priceContainer.innerHTML = `<span class="--old">${prices[selectedWeight].old}</span>${prices[selectedWeight].current}`;
                skuElement.textContent = prices[selectedWeight].sku;
            }
        });
    });
}