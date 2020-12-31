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
  // before
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLogin !== this.props.isLogin) {
      this.setState({
        isLogin: nextProps.isLogin
      });
    }

    if (nextProps.isLogin) {}
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  } // after


  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");

    if (nextProps.isLogin !== prevState.isLogin) {
      return {
        isLogin: nextProps.isLogin
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");

    if (!prevState.isLogin && this.props.isLogin) {}
  }

  componentDidMount() {
    console.log("哈哈哈~ 服务器渲染成功了！");
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "App"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
      className: "App-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u4F60\u597Dreact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
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
//# sourceMappingURL=index.ef5b9ad9571252792e58.hot-update.js.map