const isodate2timestamp = require("../lib/isodate2timestamp");

describe('isodate2timestamp', function ()
{
    test('should correctly convert ISO dates to UNIX timestamp', function ()
    {
        tests = [
            , {IsoDate: "1970-01-01T00:00:01Z", expected: "1"}
            , {IsoDate: "1970-01-01T00:01:01Z", expected: "61"}
            , {IsoDate: "1971-06-16T00:00:00Z", expected: "45878400"}
            , {IsoDate: "2018-02-02T18:24:56Z", expected: "1517595896"}
        ];

        tests.forEach(function (test)
        {
            expect(isodate2timestamp(test.IsoDate)).toBe(test.expected);
        });
    });

    test('should throw "Invalid date format" error, if the format is invalid', function ()
    {
        tests = [
            , {IsoDate: "1970-01-0100:00:01Z"}
            , {IsoDate: "1970-01-1T00:01:01Z"}
            , {IsoDate: "1970-01-01T00:0101Z"}
            , {IsoDate: "1971-06-16T00:00:0"}
            , {IsoDate: "1970-01-0bT00:01:01Z"}
        ];

        tests.forEach(function (test)
        {
            expect(function(){ isodate2timestamp(test.IsoDate); }).toThrowError('Invalid date format. Valid example: 1970-01-01T00:00:01Z');
        });
    });
});