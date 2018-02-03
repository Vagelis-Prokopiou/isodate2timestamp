const isValidDateFormat = require("../helpers/helpers").isValidDateFormat;

describe('isValidDateFormat', function ()
{
    test('should return true if the format is valid, false otherwise', function ()
    {
        tests = [
            , {IsoDate: "1970-01-01T00:00:01Z", expected: true}
            , {IsoDate: "1971-06-16T00:00:00Z", expected: true}
            , {IsoDate: "2018-02-02T18:24:56Z", expected: true}
            , {IsoDate: "1970-01-0100:00:01Z", expected: false}
            , {IsoDate: "1970-01-1T00:01:01Z", expected: false}
            , {IsoDate: "1970-01-01T00:0101Z", expected: false}
            , {IsoDate: "1971-06-16T00:00:0", expected: false}
            , {IsoDate: "197a-06-16T00:00:0", expected: false}
            , {IsoDate: "1970-01-0bT00:01:01Z", expected: false}
            , {IsoDate: null, expected: false}
            , {IsoDate: undefined, expected: false}
            , {IsoDate: NaN, expected: false}
            , {IsoDate: 'NaN', expected: false}
        ];

        tests.forEach(function (test)
        {
            expect(isValidDateFormat(test.IsoDate)).toBe(test.expected);
        });
    });
});