import {burgerMenu, favouriteContainer, closeMenu, burgerShadow} from "/manual_qa_test/js/ui/ui-elements.js";


const burgerMenuSettings = (displayType, animation) => {
    burgerShadow.style.display = displayType;
    favouriteContainer.style.animation = animation;
}

const activateBurgerMenu = () => {
    favouriteContainer.style.display = 'block';

    burgerMenu.addEventListener('click', () => {
        burgerMenuSettings(
            'block',
            'zoomInFavourite 0.3s ease-in forwards',
        )
    });

    closeMenu.addEventListener('click', () => {
        burgerMenuSettings(
            'none',
            'zoomOutFavourite 0.3s ease-in forwards',
        )
    });
};

export {activateBurgerMenu};
