import {dateToHoursFormatter} from "/manual_qa_test/js/formatters/date-fromatter.js";
import {changeFavouriteIconIfExistOnStore, favouriteAdd, removeNotAddedFavouriteText} from "/manual_qa_test/js/ui/ui-actions/favourite.js";


export const appendMessagesList = (objectList, element) => {
    element.innerHTML = ``;
    removeNotAddedFavouriteText();

    Object.entries(objectList).slice(0, 15).forEach(([_, value]) => {
        let message = document.createElement('div');
        message.classList.add('message');

        message.innerHTML += `
            <div class="message-body">
                <div class="message-icon">
                    <img alt="Message Icon" src="/manual_qa_test/assets/icons/messageOutline.svg"/>
                </div>
                <div class="message-info">
                    <div class="message-top-info">
                        <div class="message-info-description">
                            ${value.Value}
                        </div>
                    </div>
                    <div class="message-bottom-info">
                        <div class="message-date">
                            Last update: <span class="message-time">${dateToHoursFormatter(value.CreatedAt)} hours ago</span>
                        </div>
                        <div class="message-category">${value.Categories[0] ? value.Categories[0] : 'Empty Category'}</div>
                    </div>
                </div>
        </div>`

        let messageHeader = document.createElement('div');
        messageHeader.classList.add('message-header');
        message.insertBefore(messageHeader, message.firstChild);

        let messageFavoriteIcon = document.createElement('img');
        messageFavoriteIcon.classList.add('message-favorite-icon');

        changeFavouriteIconIfExistOnStore(value.Id, messageFavoriteIcon);

        messageFavoriteIcon.setAttribute('data-id', value.Id);

        messageHeader.appendChild(messageFavoriteIcon);

        messageFavoriteIcon.addEventListener('click', () => {
            favouriteAdd(value);

            return changeFavouriteIconIfExistOnStore(value.Id, messageFavoriteIcon);
        });

        return element.appendChild(message);
    });
};
