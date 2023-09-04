import {button, radioButtonCategories, radioButtonRandom, radioButtonSearch} from "/manual_qa_test/js/ui/ui-elements.js";
import {fetchDataWithAppend, fetchDataWithListAppend} from "/manual_qa_test/api/api-get-json.js";
import {toggleName} from "/manual_qa_test/js/ui/ui-actions/toggle.js";
import {getSearchText} from "/manual_qa_test/js/ui/ui-actions/search.js";


export const executeButton = () => {
    button.addEventListener('click', () => {
        if (radioButtonRandom.checked) {
            return fetchDataWithAppend(
                'https://api.chucknorris.io/jokes',
                'random',
                '',
            );
        } else if (radioButtonCategories.checked) {
            return fetchDataWithAppend(
                'https://api.chucknorris.io/jokes',
                'random',
                `category=${toggleName}`,
            );
        } else if (radioButtonSearch.checked) {
            return fetchDataWithListAppend(
                'https://api.chucknorris.io/jokes',
                'search',
                `query=${getSearchText()}`,
            );
        }

    });
};

