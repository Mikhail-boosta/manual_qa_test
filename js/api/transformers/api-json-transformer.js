let jsonBaseData = {
    Id: "",
    Categories: [],
    Url: "",
    CreatedAt: "",
    Value: "",
};

let jsonBaseDataArray = [];

const jsonTransformerFormatter = (json) => {
    return jsonBaseData = {
        Id: json.id,
        Categories: json.categories,
        Url: json.url,
        Value: json.value,
        CreatedAt: json.created_at,
    }
};

const jsonTransformerFormatterArray = (json) => {
    jsonBaseDataArray = [];

    Array.from(json).forEach((j) => {
        jsonBaseDataArray.push({
            Id: j.id,
            Categories: j.categories,
            Url: j.url,
            Value: j.value,
            CreatedAt: j.created_at,
        });
    });

    return jsonBaseDataArray;
};

export {
    jsonTransformerFormatter,
    jsonTransformerFormatterArray,
};
