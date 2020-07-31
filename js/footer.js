/**
 * 提交合作电话地区
 */
$("#push_info").click(function () {
    //获取数据
    let phone = $("#patner_phone").val();
    let area = $("#patner_area").val();
    if(!check_phone(phone)){
        alert("电话号码有误！");
        return false;
    }
    //整合提交数据
    let data = {
        phone:phone,
        area:area
    }
    //提交
    // request_https(method,url,data,callBack);
});
