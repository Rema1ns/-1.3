// боковая панель ------------------------

let SideBar = document.querySelector('.side-panel')
let openSideBarButton = document.querySelector('.menu_icon__burger');
let closeSideBarButton = SideBar.querySelector('.menu-icon__cancel');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('.body')



openSideBarButton.addEventListener('click', function (evt) {
    evt.preventDefault()
    SideBar.classList.add('side-panel_show', 'transform-slide');
    document.body.style.overflow = 'hidden'
    overlay.style.display = "block";
    SideBar.classList.remove('transform-slide-remove');

});

closeSideBarButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.body.style.overflow = 'auto'
    SideBar.classList.add('transform-slide-remove');
    overlay.style.display = "none";
});
// ------------------------------------
document.addEventListener('keydown', function (evt) {
    if (window.innerWidth < 1120)
    if (evt.keyCode === 27) {
        evt.preventDefault();
        SideBar.classList.add('transform-slide-remove');
        overlay.style.display = "none";
        document.body.style.overflow = 'auto'
    }
})
overlay.addEventListener('click', function (evt){
    overlay.style.display = "none";
    SideBar.classList.add('transform-slide-remove');
    document.body.style.overflow = 'auto'
})
