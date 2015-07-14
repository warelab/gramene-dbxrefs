# gramene-dbxrefs
module for linking to external databases

## usage
```
var dbxrefs = require('gramene-dbxrefs');

if (dbxrefs.isKnown('TAIR')) {
  var TAIR = dbxrefs.fetch('TAIR');
  var Label = TAIR.label;
  var URL = TAIR.url('AT5G60200');
}
```
