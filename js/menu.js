export const menu = {
    //handler mobile menu
    toggleMenu: false,
    boxMenu: document.querySelector("#menu"),
    menuWidget: document.querySelector("#menu-icon"),

    init: function () {
        menu.addEvents();
    },

    addEvents: function () {
        menu.menuWidget.addEventListener("click", menu.menuHandler);

        const linksMobileMenu = document.querySelectorAll('#menu .main-nav ul li a');
        linksMobileMenu.forEach(element => {
            element.addEventListener('click', menu.menuHandler);
        });

        document.querySelector('.header__logo').addEventListener('click', () => {
            if (menu.boxMenu.classList.contains('show-menu')) {
                menu.menuWidget.classList.toggle("change");
                menu.boxMenu.classList.toggle('show-menu')
                menu.boxMenu.classList.toggle('hide-menu')
            }
        })
    },

    menuHandler: function (evt) {
        menu.toggleMenu = !menu.toggleMenu;
        menu.menuWidget.classList.toggle("change");
        menu.boxMenu.classList.toggle('show-menu')
        menu.boxMenu.classList.toggle('hide-menu')
    },

    clickHandlerNotCollapse: function (evt) {
        document.querySelector("#menu-icon").click();
    }
}

menu.init();
