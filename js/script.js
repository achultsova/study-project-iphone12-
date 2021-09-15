document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    

    const tabs = () => {
        const cardDetailChange = document.querySelectorAll('.card-detail__change'),
        cardDetailsTitle = document.querySelector('.card-details__title'),
        cardImageItem = document.querySelector('.card__image_item'),
        cardDetailsPrice = document.querySelector('.card-details__price'),
        descriptionMemory = document.querySelector('.description__memory'),
        data = [
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                price: 97930,
                memory: 128
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 256GB Silver',
                img: 'img/iPhone-silver.png',
                price: 103780,
                memory: 256
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                price: 102340,
                memory: 128
            },
        ];

        const deactive = () => {
            cardDetailChange.forEach(btn => btn.classList.remove('active'));
        };

        cardDetailChange.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('active')) {
                    deactive();
                    btn.classList.add('active');
                    cardDetailsTitle.textContent = data[i].name;
                    cardImageItem.src = data[i].img;
                    cardImageItem.alt = data[i].name;
                    cardDetailsPrice.textContent = data[i].price + '₽';
                    descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memory} ГБ`;  
                }
            });
        });
    };

    const accordion = () => {
        const characteristicsListElem = document.querySelector('.characteristics__list'),
        characteristicsItemElems = document.querySelectorAll('.characteristics__item');
    

    characteristicsItemElems.forEach(elem => {
        if (elem.children[1].classList.contains('active')) {
            elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
        }
    });

    const open = (button, dropDown) => {
        closeAllDrops();
        dropDown.style.height = dropDown.scrollHeight + 'px';
        button.classList.add('active');
        dropDown.classList.add('active');
    };

    const close = (button, dropDown) => {
        button.classList.remove('active');
        dropDown.classList.remove('active');
        dropDown.style.height = '';
    };

    const closeAllDrops = (button, dropDown) => {
        characteristicsItemElems.forEach(elem => {
            if (elem.children[0] !== button && elem.children[1] !== dropDown){
                close(elem.children[0], elem.children[1]);
            }
        });
    };

    characteristicsListElem.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('characteristics__title')) {
            const parent = target.closest('.characteristics__item');
            const description = parent.querySelector('.characteristics__description');
            if (description.classList.contains('active')) {
            close (target, description);
        } else {
             open (target, description);
        }
        }
    });

    document.body.addEventListener('click', event => {
        const target = event.target;
        if (!target.closest('.characteristics__list')) {
            closeAllDrops();
        }
    });
};


    tabs();
    accordion();
    
});