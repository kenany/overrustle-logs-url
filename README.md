# overrustle-logs-url

[![Build Status][travis-svg]][travis]
[![Dependency Status][gemnasium-svg]][gemnasium]

Get the URL to OverRustle logs.

## Example

``` javascript
var overrustleLogsUrl = require('overrustle-logs-url');

overrustleLogsUrl({channel: 'destinygg', date: '2015-10-27'});
// => 'https://overrustlelogs.net/Destinygg%20chatlog/October%202015/2015-10-27.txt'
```

## Installation

``` bash
$ npm install overrustle-logs-url
```

## API

``` javascript
var overrustleLogsUrl = require('overrustle-logs-url');
```

### `overrustleLogsUrl(opts)`

Returns a _String_ URL that points to the logfile hosted at OverRustle based on
_Object_ `opts`:

  - `opts.channel`: _String_ name of channel to download logs of. This is
  non-optional unless `opts.short` is `true`, in which case `'destingg'` is
  assumed.
  - `opts.date`: _String_ date. If you are getting the entire logs of a channel,
  you must provide the year, month, and day. If you are getting the logs for a
  specific user, you only need to provide year and month. The format should be
  [parseable by `moment`](http://momentjs.com/docs/#/parsing/string/) (just use
  the ISO-8601 standard). This is non-optional unless `opts.short` is `true`, in
  which case there is absolutely no need for this.
  - `opts.user`: _String_ username of user you want to download logs of. This is
  optional, unless `opts.short` is `true` in which case you really should
  set `opts.user`, otherwise you will get a URL to the directory of the logfiles
  rather than a particular logfile itself.
  - `opts.short`: _Boolean_ whether or not you would like the "short" URL (where
  the domain is `dgg.overrustlelogs.net`) which points specifically to logfiles
  for `opts.channel = 'destinygg'`. This is optional.


   [travis]: https://travis-ci.org/KenanY/overrustle-logs-url
   [travis-svg]: https://img.shields.io/travis/KenanY/overrustle-logs-url.svg
   [gemnasium]: https://gemnasium.com/KenanY/overrustle-logs-url
   [gemnasium-svg]: https://img.shields.io/gemnasium/KenanY/overrustle-logs-url.svg
