var base64 = require('./base64');
var css = require('../node_modules/css');
var fs = require('fs');

var embed = function(url){
	var base64Data = base64(url);
	var fileContents = fs.readFileSync(url, {
        encoding: 'utf-8'
    });
    var ast = css.parse(fileContents, {
        source: url
    });
    for (var i = 0; i < ast.stylesheet.rules.length; i++) {
    	if (ast.stylesheet.rules[i].type == 'rule') {
    		for (var j = 0; j < base64Data.length; j++) {
    			if (base64Data[j].selector[0] == ast.stylesheet.rules[i].selectors[0]) {
    				for (var n = 0; n < ast.stylesheet.rules[i].declarations.length; n++) {
    					if (ast.stylesheet.rules[i].declarations[n].property == 'background' || ast.stylesheet.rules[i].declarations[n].property == 'background-image') {
    						// console.log(base64Data[j].value)
    							ast.stylesheet.rules[i].declarations[n].value = base64Data[j].value
    						 // ast.stylesheet.rules[i].declarations[n].value.replace(ast.stylesheet.rules[i].declarations[n].value.match(/.*url\(([^\)]*).*/)[1], base64Data[j].value);
    					};
    				};
    			};
    		};
    	};
    };
    fs.writeFileSync(url,css.stringify(ast))
    console.log(url + "transform successful!");
}

module.exports = embed;