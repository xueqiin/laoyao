/**
 * 提交合作电话地区
 */
$("#push_info").click(function () {
    let phone = $("#patner_phone").val();
    let area = $("#patner_area").val();
    if(!check_phone(phone)){
        alert("电话号码有误！");
        return false;
    }
    // request_https(method,url,data,callBack);
});