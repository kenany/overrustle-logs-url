var capitalize = require('capitalize');
var moment = require('moment');
var join = require('url-join');

// HTTPS actually supported
var domain = 'https://overrustlelogs.net';

function overrustleLogsUrl(opts) {

  // use shorter url and just return it now since we don't need to do any date
  // stuff anymore
  if (opts.short) {
    return 'https://dgg.overrustlelogs.net/' + opts.user;
  }

  // begin with channel directory (first letter is capitalized)
  var url = join(domain,
    encodeURIComponent(capitalize(opts.channel) + ' chatlog'));

  var date = moment.utc(opts.date);

  // then go to a specific year-month
  url = join(url,
    encodeURIComponent(date.format('MMMM') + ' ' + date.format('YYYY')));

  // get logs of specific user if desired
  if (opts.user) {
    url = join(url, 'userlogs', opts.user + '.txt');
  }

  // otherwise get logs of date
  else {
    url = join(url, date.format('YYYY-MM-DD') + '.txt');
  }

  return url;
}

module.exports = overrustleLogsUrl;
