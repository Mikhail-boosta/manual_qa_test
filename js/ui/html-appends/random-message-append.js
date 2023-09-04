import {randomMessages} from "../ui-elements.js";
import {dateToHoursFormatter} from "../../formatters/date-fromatter.js";
import {changeFavouriteIconIfExistOnStore} from "../ui-actions/favourite.js";


export const appendRandomMessage = (
    id,
    url,
    value,
    category,
    createdAt
) => {

    let messageLink = randomMessages.querySelector('.message-link-code');
    let messageUrl = randomMessages.querySelector('.message-link');
    let messageDescription = randomMessages.querySelector('.message-info-description');
    let messageTime = randomMessages.querySelector('.message-time');
    let messageCategory = randomMessages.querySelector('.message-category');
    let messageFavouriteIcon = randomMessages.querySelector('.message-favorite-icon');

    changeFavouriteIconIfExistOnStore(id, messageFavouriteIcon);

    messageLink.innerHTML = id ? id : 'Empty Id type';
    messageDescription.innerHTML = value ? value : 'No description yet!';
    messageCategory.innerHTML = category[0] ? category[0] : 'Empty Category';
    messageTime.innerHTML = `${dateToHoursFormatter(createdAt)} hours ago`;

    messageUrl.setAttribute('href', url ? url : '/');
    messageFavouriteIcon.setAttribute('data-id', id);

    messageFavouriteIcon.addEventListener('click', () => {
        return changeFavouriteIconIfExistOnStore(id, messageFavouriteIcon);
    });
};



