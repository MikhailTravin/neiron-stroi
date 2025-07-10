function indents() {
    const header = document.querySelector('.header');
    const banner = document.querySelector('.banner');

    //Оступ от шапки
    let hHeader = window.getComputedStyle(header, false).height;
    hHeader = Number(hHeader.slice(0, hHeader.length - 2));
    if (banner) {
        banner.style.paddingTop = hHeader + 'px';
    }

}

indents();


window.addEventListener('scroll', () => {
    indents();
});

window.addEventListener('resize', () => {
    indents();
});

indents();