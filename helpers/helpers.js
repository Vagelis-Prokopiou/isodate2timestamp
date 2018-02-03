const isString = function (value)
{
    return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
};

const isValidDateFormat = function (date)
{
    if (!isString(date))
    {
        return false;
    }

    const fourDigits = /\b\d{4}\b/;
    const twoDigits = /\b\d{2}\b/;
    const twoDigitsWithUTC = /\b\d{2}Z\b/;
    const parts = date.split('T');

    if (parts.length !== 2)
    {
        return false;
    }

    const dates = parts[0].split('-');
    const times = parts[1].split(':');

    return fourDigits.test(dates[0])
        && twoDigits.test(dates[1])
        && twoDigits.test(dates[2])
        && twoDigits.test(times[0])
        && twoDigits.test(times[1])
        && (twoDigitsWithUTC.test(times[2])
            || twoDigits.test(times[2]));
};

module.exports = {
    isValidDateFormat: isValidDateFormat
};