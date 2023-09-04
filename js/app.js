import {fetchDataWithAppend} from "/manual_qa_test/js/api/api-get-json.js";
import {setCurrentToggle} from "/manual_qa_test/js/ui/ui-actions/toggle.js";
import {filterSwitcher} from "/manual_qa_test/js/ui/ui-actions/switcher.js";
import {executeButton} from "/manual_qa_test/js/ui/ui-actions/button.js";
import {favouriteAdd} from "/manual_qa_test/js/ui/ui-actions/favourite.js";
import {appendMessagesList} from "/manual_qa_test/js/ui/html-appends/message-list-append.js";
import {activateBurgerMenu} from "/manual_qa_test/js/ui/ui-actions/burger.js";
import {favouriteMessages} from "/manual_qa_test/js/ui/ui-elements.js";
import {storedObjectArray} from "/manual_qa_test/js/store/favourite-store.js";


window.onload = () => {
    fetchDataWithAppend(
        'https://api.chucknorris.io/jokes/',
        'random',
        '',
    );

    filterSwitcher();
    setCurrentToggle();
    executeButton();
    favouriteAdd();
    activateBurgerMenu();

    appendMessagesList(
        storedObjectArray,
        favouriteMessages,
    );
};






