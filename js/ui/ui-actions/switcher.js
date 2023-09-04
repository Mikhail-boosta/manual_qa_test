import {radioButtonRandom, radioButtonCategories, radioButtonSearch, searchedMessages, randomMessages} from '/manual_qa_test/js/ui/ui-elements.js';
import {disableToggle, enableToggle} from "/manual_qa_test//js/ui/ui-actions/toggle.js";
import {disableSearch, enableSearch} from "/manual_qa_test/js/ui/ui-actions/search.js";


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
