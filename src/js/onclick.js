let microMenu = document.querySelectorAll('.block')[0].children;

for (const elem of microMenu) {
    elem.addEventListener('click', (evt) => {
            evt.preventDefault();
            for (const elem of microMenu) {
                elem.classList.remove("block__list--active")
            }
            elem.classList.add("block__list--active");
        }
    );
}
/*-----------------------side bar-----------------*/

let liMenu = document.querySelectorAll('.content__list')[0].children;

for (const elem of liMenu) {
    elem.addEventListener('click', (evt) => {
            evt.preventDefault();
            for (const elem of liMenu) {
                elem.classList.remove("content__list--item-active")
            }
            elem.classList.add("content__list--item-active");
        }
    );
}
