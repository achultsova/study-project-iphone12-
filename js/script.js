document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    

    const tabs = () => {
        const cardDetailChange = document.querySelectorAll('.card-detail__change'),
        cardDetailsTitle = document.querySelectorAll('.card-details__title'),
        cardImage = document.querySelectorAll('.card__image');

        const hideAll = () => {
            for (let i = 0; i < cardDetailChange.length; i++) {
              cardDetailChange[i].classList.remove('active');
              cardDetailsTitle[i].classList.remove('active');
              cardImage[i].classList.remove('active');  
            }
            
        };

        for (let i= 0; i < cardDetailChange.length; i++) {

            cardDetailChange[i].addEventListener('click', () => {
                hideAll();
                cardDetailChange[i].classList.add ('active');
                cardDetailsTitle[i].classList.add ('active');
                cardImage[i].classList.add ('active');
            });
        }
    };

    tabs();
});