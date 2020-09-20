import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import "./index.scss";

//js基础语法

let name = "jimi";
let names = ["lisa", "lili", "jimi"];
let flag = false;
let jsx = (
  <div className="jsx">
    {/* 变量的使用 */}
    <p>I am {name}</p>
    {/* 条件判断 */}
    {flag ? <p>I am {name}</p> : <p>I am not {name}</p>}
    {/* 数组循环 */}
    {names.map((name, index) => (
      <p key={index}>I am {name}</p>
    ))}
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));

//state的用法
class ES6Componet extends React.Component {
  constructor(props) {
    //props父组件往子组件传递的参数，只读
    super(props);
    this.state = {
      name: "rose",
    };
  }
  render() {
    setTimeout(() => {
      this.setState({
        //setState修改值
        name: "rose change",
      });
    }, 2000);
    return <h1>I am {this.state.name}</h1>;
  }
}
ReactDOM.render(
  <div>
    <ES6Componet />
  </div>,
  document.getElementById("app")
);

//props的用法
class ES6Componet extends React.Component {
  render() {
    return <h1>I am {this.props.name}</h1>; //props取值
  }
}
ReactDOM.render(
  <div>
    {/* 父组件传参 */}
    <ES6Componet name="rosen" />
  </div>,
  document.getElementById("app")
);
