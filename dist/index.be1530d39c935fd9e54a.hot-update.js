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
  } //   after 可以ajax 请求数据


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
    console.log("componentDidUpdate");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    const {
      data: {
        name
      }
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "App"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
      className: "App-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
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
//# sourceMappingURL=index.be1530d39c935fd9e54a.hot-update.js.map