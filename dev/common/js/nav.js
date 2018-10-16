;(function(factory){
    if(typeof define==="function" && define.amd){
        define(['jquery'],factory);
    }else if(typeof module!=="undefined" && module.exports){
        module.exports=factory(require('jquery'));
    }else{
        factory(this.jQuery);
    }
})(function($,undefined){
    var defaultOptions = {
        unfold: true, // 展开还是收起状态
        one: false  // 是否之展开一个
    };
    $.fn.easyNav = function (options) {
        var opts = $.extend({},defaultOptions,options);
        // this -> root ul
        return this.each(function (i,item) {
            var $this = $(this);
            $this
                .addClass('root')
                // m-content 是否是link 后面的兄弟节点ul的li是否存在
                .find('.m-content').each(function () {
                    var $content = $(this);
                    if ($content.data('href')) {
                        $content.addClass('link');
                    }
                    if($content.siblings('ul').children().length){
                        $content.addClass('with-arrow m-up m-down').prepend('<a href="#" class="arrow_btn"><span class="glyphicon glyphicon-menu-up"></span></a>')
                    }

                }).end()
                // 事件
                .on('click', '.link', function () {
                    location.href = $(this).data('href');
                })
                .on('click','.arrow_btn',function () {
                    var $this = $(this);
                    var $content = $this.parent();
                    var $ul = $content.siblings('ul');
                    var height = $ul[0].scrollHeight;
                    if($content.hasClass('m-down')){
                        // 展开
                        $content.removeClass('m-down');
                        $ul.height(height);
                        // 和它同级的收起
                        if(opts.one){
                            $content.parent().siblings().find('.m-content').each(function () {
                                var $content = $(this);
                                if(!$content.hasClass('m-down')){
                                    $content.addClass('m-down');
                                    var $ul = $content.siblings('ul');
                                    $ul.height(0);
                                }
                            })
                        }
                    }else{
                        // 收起
                        $content.addClass('m-down');
                        $ul.height(0);
                    }
                });
            if(opts.unfold){
                var $arrowBtn = $this.find('.arrow_btn');
                // 全部展开
                if(opts.one){
                    $arrowBtn.eq(0).trigger('click');
                }else{
                    $arrowBtn.trigger('click');
                }
            }
        });
    };
    return undefined;
});