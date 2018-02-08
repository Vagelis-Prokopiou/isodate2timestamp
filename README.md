# isodate2timestamp

A helper function for transforming ISO dates to Unix timestamp. Based on functionality provided by moment.js (https://momentjs.com/).

### Installation


```
npm install --save isodate2timestamp
```

### Usage

```
const isodate2timestamp = require("isodate2timestamp");

const timestamp = isodate2timestamp("1971-06-16T00:00:00Z");
```

Run the tests with:
```
npm test
```