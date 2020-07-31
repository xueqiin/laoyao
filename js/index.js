$(function () {
    // bootstrap轮播设置
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
})