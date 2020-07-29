(function (window, document) {
    // 获取要操作的元素
    var video = document.getElementById("video");
    var videoControls = document.getElementById("videoControls");
    var playBtn = document.getElementById("playBtn");
    var puaseBtn = document.getElementById("puaseBtn");
    var replayBtn = document.getElementById("replayBtn");
    var cenplayBtn = document.getElementById("cenplayBtn");
    var progressWrap = document.getElementById("progressWrap");
    var playProgress = document.getElementById("playProgress");
    var showPro_icon = document.getElementById("showProgress_icon");
    var progressFlag;

    // 创建我们的操作对象，我们的所有操作都在这个对象上。
    var play_v = {
        init: function () {
            var that = this;
            bindEvent(video, "loadeddata", play_v.initControls);
            play_v.operateControls();
        },
        initControls: function () {
            play_v.showHideControls();
        },
        showHideControls: function () {
            bindEvent(video, "mouseover", showControls);
            bindEvent(videoControls, "mouseover", showControls);
            bindEvent(video, "mouseout", hideControls);
            bindEvent(videoControls, "mouseout", hideControls);
        },
        operateControls: function () {
            bindEvent(playBtn, "click", play);
            bindEvent(puaseBtn, "click", puase);
            bindEvent(replayBtn, "click", replay);
            bindEvent(cenplayBtn, "click", cenplay);
            bindEvent(video, "click", play);
            bindEvent(progressWrap, "mousedown", videoSeek);
        }
    }

    play_v.init();

    // 原生的JavaScript事件绑定函数
    function bindEvent(ele, eventName, func) {
        if (window.addEventListener) {
            ele.addEventListener(eventName, func);
        } else {
            ele.attachEvent('on' + eventName, func);
        }
    }

    // 显示video的控制面板
    function showControls() {
        videoControls.style.opacity = 1;
    }

    // 隐藏video的控制面板
    function hideControls() {
        // 为了让控制面板一直出现，我把videoControls.style.opacity的值改为1
        videoControls.style.opacity = 1;
    }

    // 控制video的播放
    function play() {
        if (video.ended) {
            video.currentTime = 0;
        }
        video.play();
        progressFlag = setInterval(getProgress, 60);
        cenplayBtn.style.visibility  = "hidden";
    }

    //暂停
    function puase() {
        video.pause();
        clearInterval(progressFlag);
        cenplayBtn.style.visibility  = "visible";
    }

    //重播
    function replay() {
        video.pause();
        clearInterval(progressFlag);
        video.load();
        video.play();
        progressFlag = setInterval(getProgress, 60);
        cenplayBtn.style.visibility  = "hidden";
    }

    //中间按钮播放
    function cenplay() {
        video.play();
        progressFlag = setInterval(getProgress, 60);
        cenplayBtn.style.visibility  = "hidden";
    }

    // video的播放条
    function getProgress() {
        var percent = video.currentTime / video.duration;
        playProgress.style.width = percent * (progressWrap.offsetWidth) - 2 + "px";
        showPro_icon.style.marginLeft = percent * (progressWrap.offsetWidth) - 2 + "px";
    }

    // 鼠标在播放条上点击时进行捕获并进行处理
    function videoSeek(e) {
        if (video.paused || video.ended) {
            play();
            enhanceVideoSeek(e);
        } else {
            enhanceVideoSeek(e);
        }

    }

    function enhanceVideoSeek(e) {
        clearInterval(progressFlag);
        var length = e.pageX - progressWrap.offsetLeft;
        var percent = length / progressWrap.offsetWidth;
        playProgress.style.width = percent * (progressWrap.offsetWidth) - 2 + "px";
        video.currentTime = percent * video.duration;
        progressFlag = setInterval(getProgress, 60);
    }

}(this, document))

/*上一个视频*/
// $("#pre").click();
/*下一个视频*/
// $("#next").click();

/*预约提交*/
$("#subyy").click(function () {
    let name = $("#name").val();
    let area = $("#area").val();
    let phone = $("#phone").val();
    let data={"name":name,"area":area,"phone":phone};
    // request_https("POST",url,data,callBack);
});