const dayHours = 24;

const dateToHoursFormatter = (date) => {
    let currentDate = Date.parse(new Date());

    let days = (currentDate - Date.parse(date)) / 86400000;

    return Math.round(days * dayHours).toString();
};

export {dateToHoursFormatter};
