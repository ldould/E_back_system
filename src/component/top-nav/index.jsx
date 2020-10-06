import React from "react";
import { Link } from "react-router-dom";

class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }

  onLogout() {}
  render() {
    return (
      <div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <b>My</b>System
          </Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a
              className="dropdown-toggle"
              data-toggle="dropdown"
              href="javascript:;"
              aria-expanded="false"
            >
              <i className="fa fa-user fa-fw"></i>
              <span>欢迎，admin</span>
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-messages">
              <li>
                <a
                  onClick={() => {
                    this.onLogout();
                  }}
                >
                  <i className="fa fa-sign-out fa-fw"></i>
                  <span>退出登录</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
export default TopNav;
