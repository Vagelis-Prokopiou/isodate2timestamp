const moment = require("moment");
const isValidDateFormat = require('../helpers/helpers').isValidDateFormat;

const isodate2timestamp = function (isoDate)
{
    if (isValidDateFormat(isoDate))
    {
        return moment(isoDate).format('X');
    }    
    
    throw new Error('Invalid date format. Valid example: 1970-01-01T00:00:01Z');
};

module.exports = isodate2timestamp;
