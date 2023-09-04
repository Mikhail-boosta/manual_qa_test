import {radioButtonRandom, radioButtonCategories, radioButtonSearch, searchedMessages, randomMessages} from '/js/ui/ui-elements.js';
import {disableToggle, enableToggle} from "/js/ui/ui-actions/toggle.js";
import {disableSearch, enableSearch} from "/js/ui/ui-actions/search.js";


const shownMainBlocks = (randomDisplay, searchedDisplay) => {
    randomMessages.style.display = randomDisplay;
    searchedMessages.style.display = searchedDisplay;
};

export const filterSwitcher = () => {
    radioButtonRandom.addEventListener('click', () => {
        disableToggle();
        disableSearch();

        shownMainBlocks(
            'block',
            'none'
        );
    });

    radioButtonCategories.addEventListener('click', () => {
        enableToggle();
        disableSearch();

        shownMainBlocks(
            'block',
            'none'
        );
    });

    radioButtonSearch.addEventListener('click', () => {
        disableToggle();
        enableSearch();

        shownMainBlocks(
            'none',
            'block'
        );
    })
};
