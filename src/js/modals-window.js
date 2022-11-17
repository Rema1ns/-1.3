let ModalBar = document.querySelector('.form-chat')
let openModalButton = document.querySelector('.version-for-ipad .menu-icon__chat');
let closeModalButton = ModalBar.querySelector('.modal-icon__cancel')
let openModal2Button = document.querySelector('.menu-icon__chat')



openModal2Button.addEventListener('click', function (evt) {
    evt.preventDefault()
    ModalBar.classList.add('modal-slide')
    ModalBar.classList.add('side-panel_show');
    document.body.style.overflow = 'hidden';
});
openModalButton.addEventListener('click', function (evt) {
    evt.preventDefault()
    ModalBar.classList.add('modal-slide')
    ModalBar.classList.add('side-panel_show');
    document.body.style.overflow = 'hidden';
});

closeModalButton.addEventListener('click', function (evt){
    evt.preventDefault();
    ModalBar.classList.remove('side-panel_show');
    document.body.style.overflow = 'auto';
})

document.addEventListener('keydown', function (evt) {

        if (evt.keyCode === 27) {
            ModalBar.classList.remove('side-panel_show');
            document.body.style.overflow = 'auto';
        }
})

/*---------------------------------- модалка звонка -----*/
let Call = document.querySelector('.form-call')
let openCallButton = document.querySelector('.version-for-ipad .menu-icon__call');
let closeCallButton = Call.querySelector('.modal-icon__cancel')
let openCall2Button = document.querySelector('.menu-icon__call')


openCall2Button.addEventListener('click', function (evt) {
    evt.preventDefault()
    Call.classList.add('modal-slide')
    Call.classList.toggle('side-panel_show');
    document.body.style.overflow = 'hidden';
});
openCallButton.addEventListener('click', function (evt) {
    evt.preventDefault()
    Call.classList.add('modal-slide')
    Call.classList.add('side-panel_show');
    document.body.style.overflow = 'hidden';
});

closeCallButton.addEventListener('click', function (evt){
    evt.preventDefault();
    Call.classList.remove('side-panel_show');
    document.body.style.overflow = 'auto';
})

document.addEventListener('keydown', function (evt) {

        if (evt.keyCode === 27) {
            Call.classList.remove('side-panel_show');
            document.body.style.overflow = 'auto';
        }
})



