import Slider from './slider.js';
import Leaflet from './leaflet.js';
import Menu from './menu.js';
import ScrollSpy from './scrollSpy';

const items = document.querySelectorAll('.portfolio__menu__item');
const portfolioItems = document.querySelectorAll('.gallery__item');
const listHide = document.querySelectorAll(`article[data-item]`);

const removeCurrent = () => {
    items.forEach(item => {
        item.classList.remove('current');
    });
}

const showItemsPortfolio = (dataAttr) => {
    listHide.forEach(element => {
        if (element.getAttribute('data-item') != dataAttr) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });
}

const handleMenuPortfolio = (e) => {
    removeCurrent();
    e.target.classList.toggle('current');
    let dataAttr = document.querySelector('.current').getAttribute('data-menu');
    if (dataAttr === 'all') {
        document.querySelectorAll(`article[data-item]`).forEach(element => {
            element.style.display = "block";
        });
    } else {
        showItemsPortfolio(dataAttr);
    }
}

const itemMouseOn = (e) => {
    e.currentTarget.querySelector('.overlay').classList.remove('fade-out');
    e.currentTarget.querySelector('.overlay').classList.add('overlay--animation');
}

const itemMouseOut = (e) => {
    e.currentTarget.querySelector('.overlay').classList.remove('overlay--animation');
    e.currentTarget.querySelector('.overlay').classList.add('fade-out');
    e.currentTarget.addEventListener('animationend', (evt) => {
        evt.target.classList.remove('fade-out');
    });
}

window.addEventListener('DOMContentLoaded', () => {
    ScrollSpy();
    Slider();
    Leaflet();
    items.forEach(item => {
        item.addEventListener('click', handleMenuPortfolio);

    });

    portfolioItems.forEach(item => {
        item.addEventListener('mouseover', itemMouseOn);
        item.addEventListener('mouseout', itemMouseOut);

    });
});







