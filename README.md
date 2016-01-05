#css-urlbase64

a tool to conver the url in css background-image to base64.

严格来讲，这是一个nodejs模块，并不是gulp插件，它可以让你的css文件中background-image里面引用的图片资源转化为base64数据，以减少网络请求，提高页码性能和加载速度。

注意：请不要将大图片转换为base64，会严重降低页码性能！！！

##用法

在使用之前，请为需要转换的图片引用加上转换标记：
比如：

```css
.myImg{
	background-image: url("image/p1.png?base64");
}
```

或者

```css
.myImg{
	background: url("image/p1.png?base64") 0 0 no-repeat;
}
```

如果你需要在gulp里面使用，可以这样：

```js
var urlbase64 = require('css-urlbase64');

gulp.task('tobase64', function(){
	urlbase64('./css/style.css');
});
```

## TODO

后续版本会添加如下功能：
1.增加图片大小判断功能，通过传入制定图片大小，如果小于该大小的图片，统一转换为base64
2.将base64数据封装到JSON文件里面，单独加装，减少css文件体积

##License

The MIT License (MIT)

Copyright (c) Hoipo Cheung <tszhanghb@outlook.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.