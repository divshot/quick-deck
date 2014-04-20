'use strict';

var fs = require('fs');
var Filter = require('broccoli-filter');
var markdown = require( "markdown" ).markdown;

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
  var sections = str.split(SECTION_DELIMITER)
  
  for(var i in sections) {
    sections[i] = sections[i].trim();
    if (sections[i].match(SUBSECTION_DELIMITER)) {
      sections[i] = sections[i].split(SUBSECTION_DELIMITER);
      for (var j in sections[i]) {
        sections[i][j].trim();
      }
    }
  }
  
  var out = "";
  
  sections.forEach(function(section) {
    if (typeof section === 'object') {
      out += "<section>\n";
      section.forEach(function(subsection) {
        out += "  <section>\n" + markdown.toHTML(subsection) + "\n  </section>\n";
      });
      out += "</section>\n\n";
    } else {
      out += "<section>\n" + markdown.toHTML(section) + "\n</section>\n\n"
    }
  });
  
  var layout = fs.readFileSync(__dirname + '/templates/deck.html')
  return layout.toString().replace("{{content}}", out);
};

module.exports = slideFilter;