var overrustleLogsUrl = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(overrustleLogsUrl));
});

test('channel, date, and user', function(t) {
  t.plan(1);

  t.equal(overrustleLogsUrl({
    channel: 'destinygg',
    date: '2015-10-27',
    user: 'Bot'
  }), 'https://overrustlelogs.net/Destinygg%20chatlog/October%202015/userlogs/Bot.txt');
});

test('channel and date', function(t) {
  t.plan(1);

  t.equal(overrustleLogsUrl({
    channel: 'destinygg',
    date: '2015-10-27'
  }), 'https://overrustlelogs.net/Destinygg%20chatlog/October%202015/2015-10-27.txt');
});

test('can return short url for destinygg', function(t) {
  t.plan(1);

  t.equal(overrustleLogsUrl({
    short: true,
    user: 'Bot'
  }), 'https://dgg.overrustlelogs.net/Bot');
});
