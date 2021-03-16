const scrollSpy = () => {
    const ratio = .6;
    const allAnchors = document.querySelectorAll(`.header__menu__item a`);
    const spies = document.querySelectorAll('[data-spy]');
    let observer = null;

    /**
     * @param {HTMLElement} elem
     */
    const activate = (elem) => {
        const id = elem.getAttribute('id')
        const anchorl = document.querySelector(`.header__menu__item a[href="#${id}"]`);
        anchorl.closest('li').classList.add('active');
    }

    /**
     * @param {IntersectionObserverEntry[]} entries 
     */
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                allAnchors.forEach(element => {
                    element.closest('li').classList.remove('active');
                });
                activate(entry.target)
            }
        });
    }

    const observe = (elemts) => {
        if (observer !== null) {
            elemts.forEach(elem => observer.unobserve(elem))
        }
        const y = Math.round(window.innerHeight * ratio)
        observer = new IntersectionObserver(callback, {
            rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
        })
        spies.forEach(spy => {
            observer.observe(spy)
        });
    }

    /**
     * 
     * @param {Function} callback 
     * @param {Number} delay 
     */
    const debounce = (callback, delay) => {
        let timer;
        return () => {
            let args = arguments;
            let context = this;
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback.apply(context, args);
            }, delay)
        }
    }

    if (spies.length > 0) {
        observe(spies)
        let windowH = window.innerHeight
        window.addEventListener('resize', debounce(() => {
            if (window.innerHeight !== windowH) {
                observe(spies)
            }

        }, 500))
    }

}

export default scrollSpy;