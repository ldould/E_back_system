import React from "react";
import "./index.scss";
import MUtil from "utils/mm.jsx";
import User from "service/user-service.jsx";
const _mm = new MUtil();
const _user = new User();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: _mm.getUrlParam('redirect') || ''
    };
  }
  //这样就不用写很多个change方法，[inputName]: inputValue,可用变量表示，得到对应的字段，如下表示username:e.target.value,password:e.target.value
  onInputChange(e) {
    let inputValue = e.target.value,
      inputName = e.target.name;
    this.setState({
      [inputName]: inputValue,
    });
  }
  //当用户提交表单
  onSubmit() {
    _user.login({
      username: this.state.username,
      password: this.state.password
    })
      .then(
        (res) => {
          console.log(this.state.redirect)
          // this.props.history.push(this.state.redirect);//传值
        },
        (err) => {
          _mm.errorTips(errMsg);
        }
      );
  }
  render() {
    // console.log(this.props.history)
    // console.log(this.props.history.location)
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登录 - 我的管理系统</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">用户名</label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="请输入用户名"
                  onChange={(e) => this.onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">密码</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="请输入密码"
                  onChange={(e) => this.onInputChange(e)}
                />
              </div>

              <button
                className="btn btn-default btn-primary btn-lg btn-block"
                onClick={(e) => {
                  this.onSubmit(e);
                }}
              >
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
