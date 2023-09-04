import {favoriteNotAdded, favouriteList} from "../ui-elements.js";
import {checkIfFavouriteIndexExist, storeFavouriteObject} from "../../store/favourite-store.js";
import {transformer} from "../../api/api-get-json.js";
import {appendMessagesList} from "../html-appends/message-list-append.js";
import {favouriteMessages} from "../ui-elements.js";
import {storedObjectArray} from "../../store/favourite-store.js";


const favouriteOutlineIconPath = '../assets/icons/favouriteOutline.svg';
const favouriteFilledIconPath = '../assets/icons/favouriteFilled.svg';

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
