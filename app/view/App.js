import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }
  // before
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  //   componentWillMount() {
  //     console.log("componentWillMount");
  //   }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }

  //   after 可以ajax 请求数据
  static async getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps=");
    console.log("nextProps==", nextProps);
    // const data = await new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(10);
    //   }, 3000);
    // });

    // this.setState({
    //   number: data,
    // });
    // console.log("getDerivedStateFromProps=",data);

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  static getDerivedStateFromError(error) {
    
    console.log("componentDidUpdate");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
      const {data:{msg}}=this.props
    return (
      <div className="App">
        <header className="App-header">
     
          <h1>{msg}</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
