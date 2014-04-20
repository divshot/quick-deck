var filterSlides = require('./lib/broccoli-slides');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var slideTree = pickFiles('decks', {
  srcDir: '/',
  destDir: '/'
});

var publicTree = pickFiles('public', {
  srcDir: '/',
  destDir: '/'
});

var slideHTML = filterSlides(slideTree);

module.exports = mergeTrees([slideHTML, publicTree]);