import {jsonTransformerFormatter, jsonTransformerFormatterArray} from './transformers/api-json-transformer.js';
import {appendRandomMessage} from "../ui/html-appends/random-message-append.js";
import {appendMessagesList} from "../ui/html-appends/message-list-append.js";
import {afterLoad} from "../ui/ui-actions/preloader.js";
import {searchedMessages} from "../ui/ui-elements.js";


let transformer = {};

const apiBaseConnection = async (link, type, query) => {
    return await fetch(`${link}/${type}?${query}`, {method: 'GET'});
}

const fetchData = async (link, type, query) => {
    try {
        await apiBaseConnection(link, type, query).then(response => {
            return response.json();
        }).then(json => {
            if (json.result) {
                transformer = {...jsonTransformerFormatterArray(json.result)};
            } else {
                transformer = {...jsonTransformerFormatter(json)};
            }
        })

    } catch (err) {
        console.log(err);
    }
};

const fetchDataWithAppend = (link, type, query) => {
    fetchData(link, type, query)
        .then(() => {
            appendRandomMessage(
                transformer.Id,
                transformer.Url,
                transformer.Value,
                transformer.Categories,
                transformer.CreatedAt,
            );
            afterLoad();
        });
};

const fetchDataWithListAppend = (link, type, query) => {
    fetchData(link, type, query)
        .then(() => {
            appendMessagesList(
                transformer,
                searchedMessages,
            );
            afterLoad();
        });
};

export {
    transformer,
    apiBaseConnection,
    fetchDataWithAppend,
    fetchDataWithListAppend,
};




