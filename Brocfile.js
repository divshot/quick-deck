var filterSlides = require('./lib/broccoli-slides');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var slideTree = pickFiles('decks', {
  srcDir: '/',
  destDir: '/'
});

var bowerTree = pickFiles('bower_components', {
  srcDir: '/',
  destDir: '/bower_components'
});

var slideHTML = filterSlides(slideTree);

module.exports = mergeTrees([slideHTML, bowerTree]);