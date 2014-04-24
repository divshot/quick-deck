'use strict';

var fs = require('fs');
var Filter = require('broccoli-filter');
var markdown = require("marked");
var yamlFront = require('yaml-front-matter');

// set up the basic deck layout for rendering
var Handlebars = require('handlebars');
var layout = fs.readFileSync(__dirname + '/../templates/deck.html.hbs')
var render = Handlebars.compile(layout.toString());

markdown.setOptions({
  sanitize: false,
  smartypants: true
});

var SECTION_DELIMITER = /^={3,}$/mg
var SUBSECTION_DELIMITER = /^-{3,}$/mg

function slideFilter(inputTree, options) {
	if (!(this instanceof slideFilter)) {
		return new slideFilter(inputTree, options);
	}

	this.inputTree = inputTree;
}

slideFilter.prototype = Object.create(Filter.prototype);
slideFilter.prototype.constructor = slideFilter;

slideFilter.prototype.extensions = ['md'];
slideFilter.prototype.targetExtension = 'html';

slideFilter.prototype.processString = function (str) {
  var deck = yamlFront.loadFront(str);
  var sections = deck.__content.split(SECTION_DELIMITER)
  
  deck.theme = deck.theme || 'default';
  if (deck.theme.indexOf('.css') < 0) {
    deck.theme = "/bower_components/reveal.js/css/theme/" + deck.theme + ".css";
  }
  
  for(var i in sections) {
    sections[i] = sections[i].trim();
    if (sections[i].match(SUBSECTION_DELIMITER)) {
      sections[i] = sections[i].split(SUBSECTION_DELIMITER);
      for (var j in sections[i]) {
        sections[i][j].trim();
      }
    }
  }
  
  deck.content = "";
  
  sections.forEach(function(section) {
    if (typeof section === 'object') {
      deck.content += "<section>\n";
      section.forEach(function(subsection) {
        deck.content += "  <section>\n" + markdown(subsection) + "\n  </section>\n";
      });
      deck.content += "</section>\n\n";
    } else {
      deck.content += "<section>\n" + markdown(section) + "\n</section>\n\n"
    }
  });
  
  return render(deck);
};

module.exports = slideFilter;