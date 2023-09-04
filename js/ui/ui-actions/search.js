import {search} from "/manual_qa_test/js/ui/ui-elements.js";


const minCharSize = 3;

const disableSearch = () => {
    search.style.display = 'none';
};

const enableSearch = () => {
    search.style.display = 'block';
};

const getSearchText = () => {
    if (search.value < minCharSize) {
        return 'Chuck Norris';
    }

    return search.value;
};

export {
    disableSearch,
    enableSearch,
    getSearchText,
};
