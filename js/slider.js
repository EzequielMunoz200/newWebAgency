const Slider = () => {
    const image1 = document.querySelectorAll('.banner__image')[0];
    const image2 = document.querySelectorAll('.banner__image')[1];
    let switchSlider = true;

    document.querySelectorAll('.switch').forEach(element => {
        element.addEventListener('click', function (e) {
            image1.classList.remove('fade-out');
            image1.classList.remove('fade-in');
            image2.classList.remove('fade-in');
            image2.classList.remove('fade-out');
            if (switchSlider) {
                image2.classList.add('fade-out');
                image1.classList.add('fade-in');
            } else {
                image2.classList.add('fade-in');
                image1.classList.add('fade-out');
            }
            switchSlider = !switchSlider;

        }, false);


    });

}

export default Slider;