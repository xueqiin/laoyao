$(function(){
    //更改页面导航切换状态
     $("#header").load("public/header.html",function () {
        let idx = localStorage.getItem("c_idx");
        idx=idx?(idx-2):0;
        $(".header p").eq(idx).addClass("select_menu");
    });
    $("#footer").load("public/footer.html");
});