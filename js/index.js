$(function () {
    // 轮播设置
    $("#slidershow").carousel({
        interval: 3000,
        cycle:true
    })

    //下拉列表
    $("#sel_btn").click(function () {
        var i = 0;
        $("#sel_item li").eq(0).hasClass("hide") ? i++ : i;
        $("#sel_item li").eq(1).hasClass("hide") ? i++ : i;
        $("#sel_item li").eq(2).hasClass("hide") ? i++ : i;
        if (i == 2) {
            $("#sel_item li").removeClass("hide");
        } else {
            $("#sel_item li").eq(1).addClass("hide");
            $("#sel_item li").eq(2).addClass("hide");
        }
        $("#sel_item li").click(function () {
            $("#sel_item li").addClass("hide");
            $("#sel_item li").eq($(this).index()).removeClass("hide");
        })
    });

    //搜索
    $("#search").click(function () {
        let key = $("#search_key").val();
        // request_https(method,url,data,callBack);
    });

    //案例标签切换
    $("#case_menu p").click(function () {
        $(this).addClass("case_active").siblings().removeClass("case_active");
    });

    //播放视频
    // 视频------视频截图 ~~ 视频播放状态 ~~
    const setMedia = function (video, scale = 0.8) {
        // 设置poster属性：（非本地视频资源会有跨域截图问题）
        video.addEventListener('loadeddata', function (e) {
            // 拿到图片
            let canvas = document.createElement('canvas');
            canvas.width = video.videoWidth * scale;
            canvas.height = video.videoHeight * scale;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            let src = canvas.toDataURL('image/png');
            // 显示在dom，测试用
            (function (flag = true) {
                if (!flag) {
                    return;
                }
                let img = document.createElement('img');
                img.src = src;
                document.body.appendChild(img);
            })(0);
            // 设置属性
            video.setAttribute('poster', src);
        });


        //检测视频播放状态：
        //播放按钮
        let playBtn = video.parentNode.childNodes[2].nextSibling;

        //设置状态
        function vidplaySate(e) {
            if (video.paused) {
                video.play();
                playBtn.classList.add('pause');
            } else {
                video.pause();
                playBtn.classList.remove('pause');
            }
        }

        //点击监听
        video.addEventListener('click', vidplaySate, false);
        playBtn.addEventListener('click', vidplaySate, false);
        //结束监听
        video.addEventListener('ended', function () {
            playBtn.classList.remove('pause');
        });
    };
    //视频：
    let videos = document.querySelectorAll('video');
    videos.forEach((video) => {
        setMedia(video);
    });
})