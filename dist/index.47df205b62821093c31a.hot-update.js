require("@babel/polyfill");
require("source-map-support").install();
exports.id = "index";
exports.ids = null;
exports.modules = {

/***/ "./app/view/App.js":
/*!*************************!*\
  !*** ./app/view/App.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  } // before


  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  } //   componentWillMount() {
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
  } //   // after


  static async getDerivedStateFromProps(nextProps, prevState) {
    console.log("nextProps==", nextProps); // const data = await new Promise((resolve, reject) => {
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
    // 更新 state 使下一次渲染可以显降级 UI    return { hasError: true };  }
    console.log("componentDidUpdate");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    const {
      data
    } = this.props; //   console.log(this.props)

    const {
      number,
      name
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "App"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
      className: "App-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u4F60\u597Dreact ", number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "mane= ", name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "App-link",
      href: "https://reactjs.org",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Learn React")));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

};
;
//# sourceMappingURL=index.47df205b62821093c31a.hot-update.js.map