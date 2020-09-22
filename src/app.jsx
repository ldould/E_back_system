import React from "react";
import ReactDOM from "react-dom";

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 15,
      name: "lisa",
      bgColor: "#ddd",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      age: this.state.age + 1,
    });
  }
  onChangeBgColor(color) {
    this.setState({
      bgColor: color,
    });
  }
  render() {
    return (
      <div style={{ background: this.state.bgColor }}>
        <h1>name:{this.state.name}</h1>
        <p>age:{this.state.age}</p>
        <button onClick={this.handleClick}>加一岁</button>
        {/* 在子组件写回调函数 */}
        <Child
          changeColor={(color) => {
            this.onChangeBgColor(color);
          }}
        />
      </div>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.changeColor("red"); //调用函数改变父组件背景色
  }

  render() {
    return <button onClick={this.handleClick}>改变father的背景色：</button>;
  }
}

ReactDOM.render(
  <div>
    <Father />
  </div>,
  document.getElementById("app")
);
