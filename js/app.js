import {fetchDataWithAppend} from "./api/api-get-json.js";
import {setCurrentToggle} from "./ui/ui-actions/toggle.js";
import {filterSwitcher} from "./ui/ui-actions/switcher.js";
import {executeButton} from "./ui/ui-actions/button.js";
import {favouriteAdd} from "./ui/ui-actions/favourite.js";
import {appendMessagesList} from "./ui/html-appends/message-list-append.js";
import {activateBurgerMenu} from "./ui/ui-actions/burger.js";
import {favouriteMessages} from "./ui/ui-elements.js";
import {storedObjectArray} from "./store/favourite-store.js";


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






