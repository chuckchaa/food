function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    document.body.style.overflow = '';
}
function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);



    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => showModal(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);



    // getResource('http://localhost:3000/menu')
    // 	.then(data => createCard(data));

    // function createCard(data) {
    // 	data.forEach(({ img, altimg, title, descr, price }) => {
    // 		const element = document.createElement('div');
    // 		element.classList.add('menu__item');

    // 		element.innerHTML = `<img src=${img} alt=${altimg}>
    // 		<h3 class="menu__item-subtitle">${title}</h3>
    // 		<div class="menu__item-descr">${descr}</div>
    // 		<div class="menu__item-divider"></div>
    // 		<div class="menu__item-price">
    // 				<div class="menu__item-cost">Цена:</div>
    // 				<div class="menu__item-total"><span>${price}</span> грн/день</div>
    // 		</div>`;

    // 		document.querySelector('.menu .container').append(element);
    // 	});
    // }
}

export default modal;
export { closeModal, showModal };