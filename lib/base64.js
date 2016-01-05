var parseUrl = require('./parseUrl');
var base64img = require('../node_modules/base64-img');
var path = require('path');

var tobase64img = function(file) {
    var urlData = parseUrl(file);
    for (var i = 0; i < urlData.length; i++) {
        var _url =  path.resolve(path.dirname(file),urlData[i].value.match(/.*url\(([^\?]*).*/)[1]);
        var _data = base64img.base64Sync(_url);
        urlData[i].value = urlData[i].value.replace(urlData[i].value.match(/.*url\(([^\)]*).*/)[1], _data)
    };
    return urlData;
}

module.exports = tobase64img;
