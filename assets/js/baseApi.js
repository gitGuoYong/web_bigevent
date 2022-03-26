// 每次发请求前调用这个函数
$.ajaxPrefilter(function(options){
    options.url='http://www.liulongbin.top:3007'+options.url
})