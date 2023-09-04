import {favoriteNotAdded, favouriteList} from "/manual_qa_test/js/ui/ui-elements.js";
import {checkIfFavouriteIndexExist, storeFavouriteObject} from "/manual_qa_test/js/store/favourite-store.js";
import {transformer} from "/manual_qa_test/js/api/api/api-get-json.js";
import {appendMessagesList} from "/manual_qa_test/js/ui/html-appends/message-list-append.js";
import {favouriteMessages} from "/manual_qa_test/js/ui/ui-elements.js";
import {storedObjectArray} from "/manual_qa_test/js/store/favourite-store.js";


const favouriteOutlineIconPath = '/manual_qa_test/assets/icons/favouriteOutline.svg';
const favouriteFilledIconPath = '/manual_qa_test/assets/icons/favouriteFilled.svg';

const changeFavouriteIconIfExistOnStore = (id, element) => {
    return checkIfFavouriteIndexExist(id) !== -1 ?
        element.setAttribute('src', favouriteFilledIconPath) :
        element.setAttribute('src', favouriteOutlineIconPath);
};

const removeNotAddedFavouriteText = () => {
    storedObjectArray.length > 0 ? favoriteNotAdded.remove() : null;
};

const favouriteAdd = (innerHtmlObject) => {
    if (innerHtmlObject) {
        storeFavouriteObject(innerHtmlObject, innerHtmlObject.Id);
        appendMessagesList(storedObjectArray, favouriteMessages);
    } else {
        Array.from(favouriteList).forEach((favourite) => {
            favourite.addEventListener('click', () => {
                storeFavouriteObject(transformer, transformer.Id);
                appendMessagesList(storedObjectArray, favouriteMessages);
            });
        });
    }

    checkFavouriteSelectedByDataId();
};

const checkFavouriteSelectedByDataId = () => {
    let getFavouriteDataId = document.querySelectorAll('[data-id]');

    if (getFavouriteDataId) {
        getFavouriteDataId.forEach((id, index) => {
            return changeFavouriteIconIfExistOnStore(id.dataset.id, getFavouriteDataId[index]);
        })
    }
};

export {favouriteAdd, changeFavouriteIconIfExistOnStore, removeNotAddedFavouriteText}
