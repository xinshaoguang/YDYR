
$(function () {
    // var w = window.screen.width;
    // if ( 1440 === w ){
    //     console.log(1440)
    //     $(document.body).css('zoom', '0.75')
    // } else if ( 1366 === w){
    //     $(document.body).css('zoom', '0.711')
    // }

    
    // var isFullscreen=document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen;
    // var el = document.querySelector('body');
    // $('body').on('click', function(){
    //     if(!isFullscreen){//进入全屏,多重短路表达式
    //     (el.requestFullscreen&&el.requestFullscreen())||
    //     (el.mozRequestFullScreen&&el.mozRequestFullScreen())||
    //     (el.webkitRequestFullscreen&&el.webkitRequestFullscreen())||(el.msRequestFullscreen&&el.msRequestFullscreen());
    //     }
    // })

    if ( $(".need-scroll").length > 0 ){
        $(".need-scroll").mCustomScrollbar();
    }


    var days = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
    function getTime(){
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() < 9 ? '0'+(now.getMonth() + 1) : (now.getMonth() + 1);
        var date = now.getDate();
        var day = now.getDay();
        var time = now.getHours()+':'+now.getMinutes();
        return year+'-'+month+'-'+date+' '+days[day-1]+' '+time;
    }
    (function tick(){
        $('.date-time').html(getTime())
        setTimeout(tick, 10000);
    })();

});