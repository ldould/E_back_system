//类可以作隔离的作用域

class MUtil {
    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || "get",
                url: param.url || "",
                dataType: param.dataType || "json",
                data: param.data || null,
                success : res => {
                    //数据请求成功
                    if (0 === res.status) {
                        typeof resolve === "function" && resolve(res.data, res.msg);
                    }
                    //没有登录状态，强制登
                    else if (10 === res.status) {
                        this.doLogin();
                    } else {
                        typeof reject === "function" && reject(res.msg || res.data);
                    }
                },
                error : err => {
                    typeof reject === "function" && reject(err.statusText);
                },
            });
        });
    }
    //跳转登录
    doLogin() {
        window.location.href =
            "/login?redirect=" + encodeURIComponent(window.location.pathname);
    }
    //获取url参数
    getUrlParam(name) {
        //xxxx.com?param=123&param1=456
        let queryString = window.location.search.split("?")[1] || ""; //param=123&param1=456
        // console.log(queryString, "queryString");
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg);
        //result:['param=123','','123','&']
        // console.log(result, "result");
        return result ? encodeURIComponent(result[2]) : null;
    }
    successTips(successMsg){
        alert(successMsg || '操作成功！');
    }
    //错误提示
    errorTips(errMsg) {
        alert(errMsg || "错误");
    }
    //存储
    setStorage(name, data) {
        let dataType = typeof data;
        if (dataType === "object") {
            //json对象
            window.localStorage.setItem(name, JSON.stringify(data));
        }
        //基础类型不用序列化
        else if (["number", "string", "boolean"].indexOf(dataType) >= 0) {
            window.localStorage.setItem(name, data);
        } else {
            alert("该类型不能用于本地存储");
        }
    }
    //取出存储内容
    getStorage(name) {
        let data = window.localStorage.getItem(name);
        if (data) {
            return JSON.parse(data);
        } else {
            return "";
        }
    }
    //删除本地存储
    removeStorage(name) {
        window.localStorage.removeItem(name);
    }
}
export default MUtil;
