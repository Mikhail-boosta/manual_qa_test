import {button, radioButtonCategories, radioButtonRandom, radioButtonSearch} from "../ui-elements.js";
import {fetchDataWithAppend, fetchDataWithListAppend} from "../../api/api-get-json.js";
import {toggleName} from "./toggle.js";
import {getSearchText} from "./search.js";


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

