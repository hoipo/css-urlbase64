var css = require('../node_modules/css');
var fs = require('fs');

parseUrl = function(url) {
    var data = [];
    //读取css文件
    var fileContents = fs.readFileSync(url, {
        encoding: 'utf-8'
    });
    //将css字符串解析成对象
    var ast = css.parse(fileContents, {
        source: url
    });
    //遍历过滤出css中带有background-image的选择器
    for (var i = 0; i < ast.stylesheet.rules.length; i++) {
        if (ast.stylesheet.rules[i].type == 'rule') {
            var dec = ast.stylesheet.rules[i].declarations;
            for (var j = 0; j < dec.length; j++) {
                if ((dec[j].property == 'background-image' || dec[j].property == 'background') && RegExp(/.*url\(.*\?base64.*/).test(dec[j].value)) {
                    var _json = {};
                    _json.selector = ast.stylesheet.rules[i].selectors;
                    _json.property = dec[j].property;
                    _json.value = dec[j].value;
                    data.push(_json);
                };
            };
        };
    };
    //过滤出来的数据作为数组返回
    return data;
}



module.exports = parseUrl;
