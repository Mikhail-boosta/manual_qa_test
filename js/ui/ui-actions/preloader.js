import {preloader} from '../ui-elements.js';


export const afterLoad = () => {
    preloader.style.display = 'flex';

    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
};
