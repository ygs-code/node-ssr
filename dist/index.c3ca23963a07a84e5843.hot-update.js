require("@babel/polyfill");
require("source-map-support").install();
exports.id = "index";
exports.ids = null;
exports.modules = {

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __dirname = "app";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-static */ "koa-static");
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./app/utils/index.js");
/* harmony import */ var _db_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./db/index.js */ "./app/db/index.js");
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redis */ "./app/redis/index.js");
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/index */ "./app/routes/index.js");
/* harmony import */ var kill_port__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! kill-port */ "kill-port");
/* harmony import */ var kill_port__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(kill_port__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "./app/config/index.js");












class App {
  constructor() {
    this.app = new (koa__WEBPACK_IMPORTED_MODULE_2___default())();
    this.init();
    var obj = {
      name: "1",
      age: 2
    };
  }

  async init() {
    // redis链接
    // await this.connectRedis();
    // 数据库连接
    // await this.connectSql();
    //加载路由
    this.addRoute(); // 设置监听端口

    this.listen();
  }

  async addStatic() {
    koa_static__WEBPACK_IMPORTED_MODULE_3___default()(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, "../build"), {
      maxage: 365 * 24 * 60 * 1000,
      index: "root" // 这里配置不要写成'index'就可以了，因为在访问localhost:3030时，不能让服务默认去加载index.html文件，这里很容易掉进坑。

    });
  }

  async connectRedis() {
    await (0,_utils__WEBPACK_IMPORTED_MODULE_5__.promise)((reslove, reject) => {
      _redis__WEBPACK_IMPORTED_MODULE_7__.Redis.connect(() => {
        console.log("Redis 链接成功");
        reslove();
      });
      _redis__WEBPACK_IMPORTED_MODULE_7__.Redis.error(() => {
        console.log("Redis 链接错误");
        reject();
      });
    });
  }

  async connectSql() {
    await (0,_utils__WEBPACK_IMPORTED_MODULE_5__.promise)((reslove, reject) => {
      _db_index_js__WEBPACK_IMPORTED_MODULE_6__.connection.connect(err => {
        if (err) {
          console.log("数据库连失败");
          reject();
          throw err;
        }

        new _db_index_js__WEBPACK_IMPORTED_MODULE_6__.CheckTable();
        console.log("mysql数据库连接成功");
        reslove();
      });
    });
  }

  addRoute() {
    // 导入路由
    new _routes_index__WEBPACK_IMPORTED_MODULE_8__.default(this.app);
  }

  listen() {
    // try {
    //    kill(port, "tcp");
    // } catch (e) {}
    this.server = this.app.listen(_config__WEBPACK_IMPORTED_MODULE_10__.port, () => {
      console.log(`服务器启动成功:http://localhost:${_config__WEBPACK_IMPORTED_MODULE_10__.port}/`);
    });
    this.server.setTimeout(5 * 60 * 1000);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App());

/***/ })

};
;
//# sourceMappingURL=index.c3ca23963a07a84e5843.hot-update.js.map