import {preloader} from '/manual_qa_test/js/ui/ui-elements.js';


export const afterLoad = () => {
    preloader.style.display = 'flex';

    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
};
