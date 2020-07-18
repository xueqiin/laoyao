/**
 * 提交方法
 * @method 提交方式 get,post
 * @url 请求地址
 * @data 请求数据 格式为：json
 * @callBack 回调函数
 */
function request_https(method,url,data,callBack){
    if(method=="GET"||method=="get"){
        $.get(url,data,callBack);
    }
    if(method=="POST"||method=="post"){
        $.post(url,data,callBack );
    }
}

/**
 * 电话验证
 */
function check_phone(tel) {
    if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(tel))){
        return false;
    }
    return true;
}
