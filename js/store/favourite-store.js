let getStorageItems = localStorage.getItem('favourites');
let storedObjectArray = getStorageItems ? JSON.parse(getStorageItems) : [];

const storeFavouriteObject = (object, id) => {
    checkIfFavouriteIndexExist(id) === -1 ? storedObjectArray.push(object) : removeByIndex(storedObjectArray, id);
    localStorage.setItem('favourites', JSON.stringify(storedObjectArray));
};

const checkIfFavouriteIndexExist = (id) => {
    return storedObjectArray.findIndex(obj => obj.Id === id);
};

const removeByIndex = (array, id) => {

    let filtered = array.filter((obj) => obj.Id !== id);

    return storedObjectArray = [...filtered];
};

export {storeFavouriteObject, checkIfFavouriteIndexExist, storedObjectArray};
