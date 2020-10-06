import React from "react";
import ReactDOM from "react-dom";

class Component extends React.Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      data: "old state",
    };

    console.log("初始化数据：constructor");
  }
  //组件将要加载
  componentWillMount() {
    console.log("componentWillMount"); //在组件渲染之前执行，一般在这里执行异步方法
  }
  //组件加载完成
  componentDidMount() {
    console.log("componentDidMount"); //组件挂载成功
  }

  //将要接收父组件传来的props
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  //子组件是不是应该更新（通过return true或false控制）
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  //组件将要更新
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  //组件更新完成
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //组件将要销毁
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //处理点击事件
  handleClick() {
    console.log("更新数据：");
    this.setState({
      data: "new state",
    });
  }

  //渲染
  render() {
    console.log("render");
    return (
      <div>
        <div> {this.props.data} </div>{" "}
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          更新组件{" "}
        </button>{" "}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "old props",
      hasChild: true,
    };

    console.log("初始化数据：constructor");
  }
  onPropsChange() {
    console.log("更新props");
    this.setState({
      data: "new props",
    });
  }

  onDistoryChild() {
    this.setState({
      hasChild: false,
    });
  }
  render() {
    return (
      <div>
        {" "}
        {this.state.hasChild ? <Component data={this.state.data} /> : null}
        <button
          onClick={() => {
            this.onPropsChange();
          }}
        >
          改变props{" "}
        </button>{" "}
        <button
          onClick={() => {
            this.onDistoryChild();
          }}
        >
          去掉子组件{" "}
        </button>{" "}
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
