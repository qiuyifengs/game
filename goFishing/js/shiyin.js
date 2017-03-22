$.extend({
    F_SIZE:function(size){//使用传参的方式，以便灵活调用
        var $html = $('html');
        var $window = $('window');
        var $body = $('body');
        var psdsize = size;//这里表示我设计图的宽度
        var htmlfont = $body.width()/psdsize*100 + 'px';//计算字体大小
        $html.css('font-size', htmlfont);//设置字体大小
        $body.css('opacity', 1);//针对一些手机浏览器的默认样式
        //屏幕尺寸修改时，改变其大小
        $(window).resize(function(event) {
            htmlfont = $body.width()/psdsize*100 + 'px';
            $html.css('font-size', htmlfont);
        });
    }
});
