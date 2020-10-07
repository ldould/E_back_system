//类可以作隔离的作用域

class MUtil {
    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success(res) {
                    //数据请求成功
                    if (0 === res.status) {
                        typeof resolve === 'function' && resolve(res.data, res.msg)
                    }
                    //没有登录状态，强制登录
                    else if (10 === res.status) {
                        this.doLogin();
                    }
                    else {
                        typeof reject === 'function' && reject(res.msg || res.data)
                    }
                },
                error(err) {
                    typeof reject === 'function' && reject(err.statusText)
                }
            });
        });

    }
    //跳转登录
    doLogin() {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    //获取url参数
    getUrlParam(name) {
        //xxxx.com?param=123&param1=456
        let queryString = window.location.search.split('?')[1] || '';//param=123&param1=456
        console.log(queryString, "queryString")
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg);
        console.log(result, "result")
        return result ? encodeURIComponent(result[2]) : null;

    }
    //错误提示
    errorTips(errMsg) {
        alert(errMsg || '错误')
    }
}
export default MUtil;