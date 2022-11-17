// кнопка читать далее ----------------
let popup = document.querySelector('.block__text')
let openPopupButton = document.querySelector('.button_next')
let itsTrue = true;
let arrowButton = openPopupButton.querySelector('.arrowButton')
let buttonTextHidden = openPopupButton.querySelector('.block__text_next')

openPopupButton.addEventListener('click', function () {
    if (itsTrue) {
        popup.classList.add('block__text--open');
        itsTrue = false;
        arrowButton.style.transform = 'rotate(180deg)';
        buttonTextHidden.textContent = 'Скрыть';
    } else {
        arrowButton.style.transform = 'rotate(180deg)';
        buttonTextHidden.textContent = 'Читать далее';
        popup.classList.remove('block__text--open');
        itsTrue = true;
    }
});
//----------------------------------------------------------------------
//кнопка показать всё---------------------------------------------------
let brandsPopup = document.querySelector('.brands__for-pc-version')
let openBrandsPopup = document.querySelector('.brands__for-pc-version--open')
let buttonBrandsOpen = brandsPopup.querySelector('.brands__button--open')
let buttonBrandsClose = document.querySelector('.brands__button--close')


buttonBrandsOpen.addEventListener('click', function () {
        brandsPopup.style.display = 'none';
        openBrandsPopup.style.display = 'block';
        if (window.matchMedia("(max-width: 769px)").matches) {
            brandsPopup.style.display = 'none';
            openBrandsPopup.style.display = 'none';
        }
});
buttonBrandsClose.addEventListener('click', function () {
    brandsPopup.style.display = 'block';
    openBrandsPopup.style.display = 'none';
    if (window.matchMedia("(max-width: 769px)").matches) {
        brandsPopup.style.display = 'none';
        openBrandsPopup.style.display = 'none';
    }
})
