'use strict';

var yarn = require('..');

yarn.global('isobject', function(err) {
  if (err) return console.error(err);
  console.log('done');
});
