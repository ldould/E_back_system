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

//事件处理

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "rose",
      age: 18,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      age: this.state.age + 1,
    });
  }
  handleChange(e) {
    this.setState({
      age: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>I am {this.state.name}</h1>
        <p>I am {this.state.age} years old</p>
        <button onClick={this.handleClick}>加一岁</button>
        {/* <button onClick={(e) => {this.handleClick(e);}}>
          加一岁
        </button> */}
        <input
          type="text"
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Component />
  </div>,
  document.getElementById("app")
);

//这是组件的组合方式
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "rose",
      age: 18,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      age: this.state.age + 1,
    });
  }
  handleChange(e) {
    this.setState({
      age: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>I am {this.state.name}</h1>
        <p>I am {this.state.age} years old</p>
        <button onClick={this.handleClick}>加一岁</button>
        {/* <button onClick={(e) => {this.handleClick(e);}}>
          加一岁
        </button> */}
        <input
          type="text"
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
      </div>
    );
  }
}

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return <h1>{this.props.children}</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="">
        {/* 容器式组件 */}
        <Title>
          <span>app span</span>
          <a href="">link</a>
        </Title>
        <hr />
        {/* 单纯组件 */}
        <Component />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("app")
);

//父子组件改变值

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeColor("red");
  }

  render() {
    return (
      <div>
        <h1>父组件的背景色： {this.props.bgColor}</h1>
        <button onClick={this.handleClick}>改变背景色</button>
        {/* <button onClick={(e) => {this.handleClick(e);}}>
          加一岁
        </button> */}
      </div>
    );
  }
}

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#999",
    };
  }
  onBgColorChange(color) {
    this.setState({
      bgColor: color,
    });
  }
  render(props) {
    return (
      <div style={{ background: this.state.bgColor }}>

      {/* 在子组件写回调函数 */}
        <Child
          bgColor={this.state.bgColor}
          changeColor={(color) => {
            this.onBgColorChange(color);
          }}
        />
        ;
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Father />
  </div>,
  document.getElementById("app")
);

//兄弟之间改变值

import React from "react";
import ReactDOM from "react-dom";

class Child1 extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeChild2Color("red");
  }

  render() {
    return (
      <div>
        <h1>child1: </h1>
        <button onClick={this.handleClick}>改变child2背景色</button>
        {/* <button onClick={(e) => {this.handleClick(e);}}>
          加一岁
        </button> */}
      </div>
    );
  }
}

class Child2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ background: this.props.child2BgColor }}>
        <h1>child2背景色: {this.props.changeChild2BgColor}</h1>
      </div>
    );
  }
}

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      child2BgColor: "#999",
    };
  }
  changeChild2BgColor(color) {
    this.setState({
      child2BgColor: color,
    });
  }
  render(props) {
    return (
      <div>
        <Child1
          changeChild2Color={(color) => {
            this.changeChild2BgColor(color);
          }}
        />
        <Child2 child2BgColor={this.state.child2BgColor} />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Father />
  </div>,
  document.getElementById("app")
);
