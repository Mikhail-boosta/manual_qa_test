import {jsonTransformerFormatter, jsonTransformerFormatterArray} from '/manual_qa_test/js/api/transformers/api-json-transformer.js';
import {appendRandomMessage} from "/manual_qa_test/js/ui/html-appends/random-message-append.js";
import {appendMessagesList} from "/manual_qa_test/js/ui/html-appends/message-list-append.js";
import {afterLoad} from "/manual_qa_test/js/ui/ui-actions/preloader.js";
import {searchedMessages} from "/manual_qa_test/js/ui/ui-elements.js";


let transformer = {};

const apiBaseConnection = async (link, type, query) => {
    return await fetch(`${link}/${type}?${query}&login=manual_qa_test&pass=i_like_boosta`, {method: 'GET'});
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




