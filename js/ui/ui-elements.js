const button = document.getElementById('Button');
const search = document.getElementById('Search');
const toggle = document.getElementById('Toggle');
const preloader = document.getElementById('Preloader');
const burgerMenu = document.getElementById('BurgerMenu');
const burgerShadow = document.getElementById('BurgerShadow');
const closeMenu = document.getElementById('CloseMenu');
const randomMessages = document.getElementById('RandomMessages');
const favouriteContainer = document.getElementById('FavouriteContainer');
const favouriteMessages = document.getElementById('FavouriteMessages');
const searchedMessages = document.getElementById('SearchedMessages');
const favoriteNotAdded = document.getElementById('FavoriteNotAdded');

const radioButtonRandom = document.getElementById('RadioButtonRandom');
const radioButtonCategories = document.getElementById('RadioButtonCategories');
const radioButtonSearch = document.getElementById('RadioButtonSearch');

let favouriteList = document.getElementsByClassName('message-favorite-icon');

export {
    button,
    toggle,
    search,
    closeMenu,
    preloader,
    burgerMenu,
    burgerShadow,
    favouriteList,
    randomMessages,
    favoriteNotAdded,
    searchedMessages,
    favouriteMessages,
    radioButtonRandom,
    radioButtonSearch,
    favouriteContainer,
    radioButtonCategories,
};
