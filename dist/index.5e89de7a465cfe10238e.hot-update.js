require("@babel/polyfill");
require("source-map-support").install();
exports.id = "index";
exports.ids = null;
exports.modules = {

/***/ "./app/bizMod/abnormity/bizMod/script/controller/index.js":
/*!****************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/controller/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./app/bizMod/abnormity/bizMod/script/service/index.js");


class Controller {
  static async query(ctx, next) {
    console.log('Controller_query12341==');
    const {
      query = {},
      response,
      request
    } = ctx;
    const {
      body = {// mutation = '', variables = {}
      }
    } = request;
    const parameter = query; // 获取请求参数

    console.log('service.query==', service.query); //添加service

    const data = await service.query(ctx, next, parameter);
    ctx.response.body = data;
  }

  static async add(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    const parameter = ctx.request.body; // 获取请求参数
    // //添加service
    // const data = await userService.add(ctx, next, parameter);
    // const getMessage = (data) => {
    //   const { status } = data;
    //   const message = {
    //     1: () =>
    //       merge(unsupported, {
    //         msg: "该用户名已经被注册过,请重新输入用户名",
    //       }),
    //     2: () =>
    //       merge(unsupported, {
    //         msg: "该手机号码已经被注册过,请重新输入手机号码",
    //       }),
    //     3: () => ({
    //       code: 200,
    //       msg: "注册成功",
    //     }),
    //   };
    // return message[status]();
    // };

    ctx.response.body = parameter;
  }

  static edit(ctx, next) {
    ctx.set("Content-Type", "application/json");
    var page = ctx.params.page; // 获取请求参数
    //添加service
    // const data = userService.list(page);
    // ctx.response.body = "d";
  }

  static async login(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    var parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await userService.login(ctx, next, parameter);

    const getMessage = data => {
      const {
        status,
        token,
        userInfo
      } = data;
      const message = {
        1: () => merge(unauthorized, {
          msg: "用户名错误，请重新输入用户名"
        }),
        2: () => merge(unauthorized, {
          msg: "密码错误请重新输入密码"
        }),
        3: () => ({
          code: 200,
          msg: "登录成功",
          data: {
            token,
            userInfo
          }
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Controller)));

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/index.js":
/*!*****************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schema": () => /* reexport safe */ _graphql_schema__WEBPACK_IMPORTED_MODULE_1__.default
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./app/bizMod/abnormity/bizMod/script/router/index.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/abnormity/bizMod/script/graphql/schema/index.js");



/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/router/index.js":
/*!************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/router/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ "./app/bizMod/abnormity/bizMod/script/controller/index.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);

 // koa 路由中间件

class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.threeLevelRoute = new koaRoute({
      prefix: "/script" // 给路由统一加个前缀：

    });
    return this.threeLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 注册路由
    this.query();
    this.add();
    this.edit();
    this.router.use(this.threeLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

  query() {
    // 添加 接口
    this.threeLevelRoute.get("/query", controller.query);
  }

  add() {
    // 添加 接口
    this.threeLevelRoute.post("/add", controller.add);
  }

  edit() {
    // 添加 接口
    this.threeLevelRoute.post("/edit", controller.edit);
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (router)));

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/service/index.js":
/*!*************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/service/index.js ***!
  \*************************************************************/
/***/ (() => {

"use strict";
class Service {
  static async query(ctx, next, parameter) {
    return {
      name: "Service",
      ...parameter
    };
  } // static list(page) {
  //     console.log('page=', page);
  //     const dataList = {
  //         list: [
  //             {
  //                 time: '2019-7-10',
  //                 id: 1,
  //                 title: 'this is news 1',
  //                 url: '/news/1',
  //             },
  //             {
  //                 time: '2019-8-10',
  //                 id: 2,
  //                 title: 'this is news 2',
  //                 url: '/news/2',
  //             },
  //         ],
  //     };
  //     return dataList.list[page] || {};
  // }
  // //注册用户
  // static async add(ctx, next, parameter) {
  //     const { username: name, phone, password } = parameter;
  //     /*
  //  1 查询用户名是否被注册过，
  //  2 查询手机号码是否被注册过
  //  3 如果都没有被注册那么就可以注册
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         phone,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     const data = await addUser({
  //         name,
  //         phone,
  //         password,
  //     });
  //     if (data) {
  //         return {
  //             status: 3,
  //         };
  //     }
  // }
  // // 编辑用户
  // static async edit(ctx, next, parameter) {}
  // // 数据库中查询用户
  // static async queryUser(...ags) {
  //     const userData = await queryUser(...ags);
  //     return userData;
  // }
  // // 登录
  // static async login(ctx, next, parameter = {}) {
  //     const { username: name, phone, password } = parameter;
  //     const { request, response,cookies } = ctx;
  //     /*
  //   1.先查询用户名是否正确，
  //   2.查询用户和密码是否正确
  //   3.创建token,存储到redis中
  //   4.把用户信息挂载response中
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     userInfo = await queryUser({
  //         name,
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     /*
  //  创建 createToken
  // */
  //     const token = await createToken(userInfo);
  //     delete userInfo.password;
  //     ctx.response.userInfo = userInfo;
  //     console.log('setExpirationTime=', setExpirationTime());
  //     // console.log('token=', token);
  //     // console.log('request=', request);
  //     // console.log('session=', session);
  //    console.log('cookies===',cookies)
  //     // cookie.expires = false;
  //     // cookie.maxAge = 5 * 60 * 1000;
  //     cookies.set('token', token, {
  //         httpOnly: false,
  //         overwrite: false,
  //         // expires: setExpirationTime(),
  //     });
  //     if (userInfo) {
  //         //登录成功
  //         return {
  //             status: 3,
  //             token,
  //             userInfo,
  //         };
  //     }
  // }


}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Service)));

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/controller/index.js":
/*!**************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/controller/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./app/bizMod/abnormity/bizMod/user/service/index.js");


class Controller {
  static async query(ctx, next) {
    console.log('Controller_query12341==');
    const {
      query = {},
      response,
      request
    } = ctx;
    const {
      body = {// mutation = '', variables = {}
      }
    } = request;
    const parameter = query; // 获取请求参数

    console.log('service.query==', service.query); //添加service

    const data = await service.query(ctx, next, parameter);
    ctx.response.body = data;
  }

  static async add(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    const parameter = ctx.request.body; // 获取请求参数
    // //添加service
    // const data = await userService.add(ctx, next, parameter);
    // const getMessage = (data) => {
    //   const { status } = data;
    //   const message = {
    //     1: () =>
    //       merge(unsupported, {
    //         msg: "该用户名已经被注册过,请重新输入用户名",
    //       }),
    //     2: () =>
    //       merge(unsupported, {
    //         msg: "该手机号码已经被注册过,请重新输入手机号码",
    //       }),
    //     3: () => ({
    //       code: 200,
    //       msg: "注册成功",
    //     }),
    //   };
    // return message[status]();
    // };

    ctx.response.body = parameter;
  }

  static edit(ctx, next) {
    ctx.set("Content-Type", "application/json");
    var page = ctx.params.page; // 获取请求参数
    //添加service
    // const data = userService.list(page);
    // ctx.response.body = "d";
  }

  static async login(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    var parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await userService.login(ctx, next, parameter);

    const getMessage = data => {
      const {
        status,
        token,
        userInfo
      } = data;
      const message = {
        1: () => merge(unauthorized, {
          msg: "用户名错误，请重新输入用户名"
        }),
        2: () => merge(unauthorized, {
          msg: "密码错误请重新输入密码"
        }),
        3: () => ({
          code: 200,
          msg: "登录成功",
          data: {
            token,
            userInfo
          }
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Controller)));

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/index.js":
/*!***************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schema": () => /* reexport safe */ _graphql_schema__WEBPACK_IMPORTED_MODULE_1__.default
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./app/bizMod/abnormity/bizMod/user/router/index.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/abnormity/bizMod/user/graphql/schema/index.js");

 // import {default as schema} from "./graphql/schema";
// console.log('schema2==========',schema)

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/router/index.js":
/*!**********************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/router/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ "./app/bizMod/abnormity/bizMod/user/controller/index.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);

 // koa 路由中间件

class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.threeLevelRoute = new koaRoute({
      prefix: "/user" // 给路由统一加个前缀：

    });
    return this.threeLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 注册路由
    this.query();
    this.add();
    this.edit();
    this.router.use(this.threeLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

  query() {
    // 添加 接口
    this.threeLevelRoute.get("/query", controller.query);
  }

  add() {
    // 添加 接口
    this.threeLevelRoute.post("/add", controller.add);
  }

  edit() {
    // 添加 接口
    this.threeLevelRoute.post("/edit", controller.edit);
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (router)));

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/service/index.js":
/*!***********************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/service/index.js ***!
  \***********************************************************/
/***/ (() => {

"use strict";
class Service {
  static async query(ctx, next, parameter) {
    return {
      name: "Service",
      ...parameter
    };
  } // static list(page) {
  //     console.log('page=', page);
  //     const dataList = {
  //         list: [
  //             {
  //                 time: '2019-7-10',
  //                 id: 1,
  //                 title: 'this is news 1',
  //                 url: '/news/1',
  //             },
  //             {
  //                 time: '2019-8-10',
  //                 id: 2,
  //                 title: 'this is news 2',
  //                 url: '/news/2',
  //             },
  //         ],
  //     };
  //     return dataList.list[page] || {};
  // }
  // //注册用户
  // static async add(ctx, next, parameter) {
  //     const { username: name, phone, password } = parameter;
  //     /*
  //  1 查询用户名是否被注册过，
  //  2 查询手机号码是否被注册过
  //  3 如果都没有被注册那么就可以注册
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         phone,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     const data = await addUser({
  //         name,
  //         phone,
  //         password,
  //     });
  //     if (data) {
  //         return {
  //             status: 3,
  //         };
  //     }
  // }
  // // 编辑用户
  // static async edit(ctx, next, parameter) {}
  // // 数据库中查询用户
  // static async queryUser(...ags) {
  //     const userData = await queryUser(...ags);
  //     return userData;
  // }
  // // 登录
  // static async login(ctx, next, parameter = {}) {
  //     const { username: name, phone, password } = parameter;
  //     const { request, response,cookies } = ctx;
  //     /*
  //   1.先查询用户名是否正确，
  //   2.查询用户和密码是否正确
  //   3.创建token,存储到redis中
  //   4.把用户信息挂载response中
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     userInfo = await queryUser({
  //         name,
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     /*
  //  创建 createToken
  // */
  //     const token = await createToken(userInfo);
  //     delete userInfo.password;
  //     ctx.response.userInfo = userInfo;
  //     console.log('setExpirationTime=', setExpirationTime());
  //     // console.log('token=', token);
  //     // console.log('request=', request);
  //     // console.log('session=', session);
  //    console.log('cookies===',cookies)
  //     // cookie.expires = false;
  //     // cookie.maxAge = 5 * 60 * 1000;
  //     cookies.set('token', token, {
  //         httpOnly: false,
  //         overwrite: false,
  //         // expires: setExpirationTime(),
  //     });
  //     if (userInfo) {
  //         //登录成功
  //         return {
  //             status: 3,
  //             token,
  //             userInfo,
  //         };
  //     }
  // }


}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Service)));

/***/ }),

/***/ "./app/bizMod/abnormity/index.js":
/*!***************************************!*\
  !*** ./app/bizMod/abnormity/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schema": () => /* reexport module object */ _graphql_schema__WEBPACK_IMPORTED_MODULE_1__
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./app/bizMod/abnormity/router/index.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/abnormity/graphql/schema/index.js");
// export * as script from "./bizMod/script";


 // export { schema as scriptSchema} from "./bizMod/script"; //scriptRouter 路由

/***/ }),

/***/ "./app/bizMod/abnormity/router/index.js":
/*!**********************************************!*\
  !*** ./app/bizMod/abnormity/router/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bizMod_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bizMod/script */ "./app/bizMod/abnormity/bizMod/script/index.js");
/* harmony import */ var _bizMod_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bizMod/user */ "./app/bizMod/abnormity/bizMod/user/index.js");
 // koa 路由中间件

 //scriptRouter 路由  

 //userRouter 路由  

class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.twoLevelRoute = new koaRoute({
      prefix: "/abnormity" // 给路由统一加个前缀：

    });
    return this.twoLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 为script模块添加路由
    new scriptRouter(this.app, this.twoLevelRoute);
    new userRouter(this.app, this.twoLevelRoute); // 添加路由

    this.router.use(this.twoLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (router)));

/***/ }),

/***/ "./app/bizMod/index.js":
/*!*****************************!*\
  !*** ./app/bizMod/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports schema, router */
/* harmony import */ var _abnormity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abnormity */ "./app/bizMod/abnormity/index.js");
/* harmony import */ var _performance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./performance */ "./app/bizMod/performance/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "./app/utils/index.js");



const checkSchemas = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.checkSchema)();
const schema = (() => {
  let typeDefs = {
    schema: "",
    schemas: []
  };
  let resolvers = {
    Mutation: {},
    Query: {},
    Subscription: {}
  }; // 动态添加模块

  const schemas = { ..._abnormity__WEBPACK_IMPORTED_MODULE_0__.schema,
    ..._performance__WEBPACK_IMPORTED_MODULE_1__.schema
  };
  const schemaKeys = Object.keys(schemas);

  for (let key of schemaKeys) {
    typeDefs.schema += schemas[key].typeDefs.schema + "\n";
    typeDefs.schemas.push(schemas[key].typeDefs.schema);
    checkSchemas(resolvers, schemas[key].resolvers);
  }

  return {
    typeDefs,
    resolvers
  };
})();
const router = (app, router) => {
  // 动态添加模块
  new abnormityRouter(app, router);
  new performanceRouter(app, router);
};

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/controller/index.js":
/*!********************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/controller/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./app/bizMod/performance/bizMod/download/service/index.js");


class Controller {
  static async query(ctx, next) {
    console.log('Controller_query12341==');
    const {
      query = {},
      response,
      request
    } = ctx;
    const {
      body = {// mutation = '', variables = {}
      }
    } = request;
    const parameter = query; // 获取请求参数

    console.log('service.query==', service.query); //添加service

    const data = await service.query(ctx, next, parameter);
    ctx.response.body = data;
  }

  static async add(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    const parameter = ctx.request.body; // 获取请求参数
    // //添加service
    // const data = await userService.add(ctx, next, parameter);
    // const getMessage = (data) => {
    //   const { status } = data;
    //   const message = {
    //     1: () =>
    //       merge(unsupported, {
    //         msg: "该用户名已经被注册过,请重新输入用户名",
    //       }),
    //     2: () =>
    //       merge(unsupported, {
    //         msg: "该手机号码已经被注册过,请重新输入手机号码",
    //       }),
    //     3: () => ({
    //       code: 200,
    //       msg: "注册成功",
    //     }),
    //   };
    // return message[status]();
    // };

    ctx.response.body = parameter;
  }

  static edit(ctx, next) {
    ctx.set("Content-Type", "application/json");
    var page = ctx.params.page; // 获取请求参数
    //添加service
    // const data = userService.list(page);
    // ctx.response.body = "d";
  }

  static async login(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    var parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await userService.login(ctx, next, parameter);

    const getMessage = data => {
      const {
        status,
        token,
        userInfo
      } = data;
      const message = {
        1: () => merge(unauthorized, {
          msg: "用户名错误，请重新输入用户名"
        }),
        2: () => merge(unauthorized, {
          msg: "密码错误请重新输入密码"
        }),
        3: () => ({
          code: 200,
          msg: "登录成功",
          data: {
            token,
            userInfo
          }
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Controller)));

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/index.js":
/*!*********************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schema": () => /* reexport safe */ _graphql_schema__WEBPACK_IMPORTED_MODULE_1__.default
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./app/bizMod/performance/bizMod/download/router/index.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/performance/bizMod/download/graphql/schema/index.js");



/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/router/index.js":
/*!****************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/router/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ "./app/bizMod/performance/bizMod/download/controller/index.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);

 // koa 路由中间件

class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.threeLevelRoute = new koaRoute({
      prefix: "/download" // 给路由统一加个前缀：

    });
    return this.threeLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 注册路由
    this.query();
    this.add();
    this.edit();
    this.router.use(this.threeLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

  query() {
    // 添加 接口
    this.threeLevelRoute.get("/query", controller.query);
  }

  add() {
    // 添加 接口
    this.threeLevelRoute.post("/add", controller.add);
  }

  edit() {
    // 添加 接口
    this.threeLevelRoute.post("/edit", controller.edit);
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (router)));

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/service/index.js":
/*!*****************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/service/index.js ***!
  \*****************************************************************/
/***/ (() => {

"use strict";
class Service {
  static async query(ctx, next, parameter) {
    return {
      name: "Service",
      ...parameter
    };
  } // static list(page) {
  //     console.log('page=', page);
  //     const dataList = {
  //         list: [
  //             {
  //                 time: '2019-7-10',
  //                 id: 1,
  //                 title: 'this is news 1',
  //                 url: '/news/1',
  //             },
  //             {
  //                 time: '2019-8-10',
  //                 id: 2,
  //                 title: 'this is news 2',
  //                 url: '/news/2',
  //             },
  //         ],
  //     };
  //     return dataList.list[page] || {};
  // }
  // //注册用户
  // static async add(ctx, next, parameter) {
  //     const { username: name, phone, password } = parameter;
  //     /*
  //  1 查询用户名是否被注册过，
  //  2 查询手机号码是否被注册过
  //  3 如果都没有被注册那么就可以注册
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         phone,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     const data = await addUser({
  //         name,
  //         phone,
  //         password,
  //     });
  //     if (data) {
  //         return {
  //             status: 3,
  //         };
  //     }
  // }
  // // 编辑用户
  // static async edit(ctx, next, parameter) {}
  // // 数据库中查询用户
  // static async queryUser(...ags) {
  //     const userData = await queryUser(...ags);
  //     return userData;
  // }
  // // 登录
  // static async login(ctx, next, parameter = {}) {
  //     const { username: name, phone, password } = parameter;
  //     const { request, response,cookies } = ctx;
  //     /*
  //   1.先查询用户名是否正确，
  //   2.查询用户和密码是否正确
  //   3.创建token,存储到redis中
  //   4.把用户信息挂载response中
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     userInfo = await queryUser({
  //         name,
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     /*
  //  创建 createToken
  // */
  //     const token = await createToken(userInfo);
  //     delete userInfo.password;
  //     ctx.response.userInfo = userInfo;
  //     console.log('setExpirationTime=', setExpirationTime());
  //     // console.log('token=', token);
  //     // console.log('request=', request);
  //     // console.log('session=', session);
  //    console.log('cookies===',cookies)
  //     // cookie.expires = false;
  //     // cookie.maxAge = 5 * 60 * 1000;
  //     cookies.set('token', token, {
  //         httpOnly: false,
  //         overwrite: false,
  //         // expires: setExpirationTime(),
  //     });
  //     if (userInfo) {
  //         //登录成功
  //         return {
  //             status: 3,
  //             token,
  //             userInfo,
  //         };
  //     }
  // }


}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Service)));

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/controller/index.js":
/*!*******************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/controller/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./app/bizMod/performance/bizMod/network/service/index.js");


class Controller {
  static async query(ctx, next) {
    console.log('Controller_query12341==');
    const {
      query = {},
      response,
      request
    } = ctx;
    const {
      body = {// mutation = '', variables = {}
      }
    } = request;
    const parameter = query; // 获取请求参数

    console.log('service.query==', service.query); //添加service

    const data = await service.query(ctx, next, parameter);
    ctx.response.body = data;
  }

  static async add(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    const parameter = ctx.request.body; // 获取请求参数
    // //添加service
    // const data = await userService.add(ctx, next, parameter);
    // const getMessage = (data) => {
    //   const { status } = data;
    //   const message = {
    //     1: () =>
    //       merge(unsupported, {
    //         msg: "该用户名已经被注册过,请重新输入用户名",
    //       }),
    //     2: () =>
    //       merge(unsupported, {
    //         msg: "该手机号码已经被注册过,请重新输入手机号码",
    //       }),
    //     3: () => ({
    //       code: 200,
    //       msg: "注册成功",
    //     }),
    //   };
    // return message[status]();
    // };

    ctx.response.body = parameter;
  }

  static edit(ctx, next) {
    ctx.set("Content-Type", "application/json");
    var page = ctx.params.page; // 获取请求参数
    //添加service
    // const data = userService.list(page);
    // ctx.response.body = "d";
  }

  static async login(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    var parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await userService.login(ctx, next, parameter);

    const getMessage = data => {
      const {
        status,
        token,
        userInfo
      } = data;
      const message = {
        1: () => merge(unauthorized, {
          msg: "用户名错误，请重新输入用户名"
        }),
        2: () => merge(unauthorized, {
          msg: "密码错误请重新输入密码"
        }),
        3: () => ({
          code: 200,
          msg: "登录成功",
          data: {
            token,
            userInfo
          }
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Controller)));

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/index.js":
/*!********************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schema": () => /* reexport safe */ _graphql_schema__WEBPACK_IMPORTED_MODULE_1__.default
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./app/bizMod/performance/bizMod/network/router/index.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/performance/bizMod/network/graphql/schema/index.js");



/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/router/index.js":
/*!***************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/router/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ "./app/bizMod/performance/bizMod/network/controller/index.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);

 // koa 路由中间件

class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.threeLevelRoute = new koaRoute({
      prefix: "/network" // 给路由统一加个前缀：

    });
    return this.threeLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 注册路由
    this.query();
    this.add();
    this.edit();
    this.router.use(this.threeLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

  query() {
    // 添加 接口
    this.threeLevelRoute.get("/query", controller.query);
  }

  add() {
    // 添加 接口
    this.threeLevelRoute.post("/add", controller.add);
  }

  edit() {
    // 添加 接口
    this.threeLevelRoute.post("/edit", controller.edit);
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (router)));

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/service/index.js":
/*!****************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/service/index.js ***!
  \****************************************************************/
/***/ (() => {

"use strict";
class Service {
  static async query(ctx, next, parameter) {
    return {
      name: "Service",
      ...parameter
    };
  } // static list(page) {
  //     console.log('page=', page);
  //     const dataList = {
  //         list: [
  //             {
  //                 time: '2019-7-10',
  //                 id: 1,
  //                 title: 'this is news 1',
  //                 url: '/news/1',
  //             },
  //             {
  //                 time: '2019-8-10',
  //                 id: 2,
  //                 title: 'this is news 2',
  //                 url: '/news/2',
  //             },
  //         ],
  //     };
  //     return dataList.list[page] || {};
  // }
  // //注册用户
  // static async add(ctx, next, parameter) {
  //     const { username: name, phone, password } = parameter;
  //     /*
  //  1 查询用户名是否被注册过，
  //  2 查询手机号码是否被注册过
  //  3 如果都没有被注册那么就可以注册
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         phone,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     const data = await addUser({
  //         name,
  //         phone,
  //         password,
  //     });
  //     if (data) {
  //         return {
  //             status: 3,
  //         };
  //     }
  // }
  // // 编辑用户
  // static async edit(ctx, next, parameter) {}
  // // 数据库中查询用户
  // static async queryUser(...ags) {
  //     const userData = await queryUser(...ags);
  //     return userData;
  // }
  // // 登录
  // static async login(ctx, next, parameter = {}) {
  //     const { username: name, phone, password } = parameter;
  //     const { request, response,cookies } = ctx;
  //     /*
  //   1.先查询用户名是否正确，
  //   2.查询用户和密码是否正确
  //   3.创建token,存储到redis中
  //   4.把用户信息挂载response中
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     userInfo = await queryUser({
  //         name,
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     /*
  //  创建 createToken
  // */
  //     const token = await createToken(userInfo);
  //     delete userInfo.password;
  //     ctx.response.userInfo = userInfo;
  //     console.log('setExpirationTime=', setExpirationTime());
  //     // console.log('token=', token);
  //     // console.log('request=', request);
  //     // console.log('session=', session);
  //    console.log('cookies===',cookies)
  //     // cookie.expires = false;
  //     // cookie.maxAge = 5 * 60 * 1000;
  //     cookies.set('token', token, {
  //         httpOnly: false,
  //         overwrite: false,
  //         // expires: setExpirationTime(),
  //     });
  //     if (userInfo) {
  //         //登录成功
  //         return {
  //             status: 3,
  //             token,
  //             userInfo,
  //         };
  //     }
  // }


}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Service)));

/***/ }),

/***/ "./app/bizMod/performance/index.js":
/*!*****************************************!*\
  !*** ./app/bizMod/performance/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schema": () => /* reexport module object */ _graphql_schema__WEBPACK_IMPORTED_MODULE_1__
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./app/bizMod/performance/router/index.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/performance/graphql/schema/index.js");
// export * as script from "./bizMod/script";


 // export { schema as scriptSchema} from "./bizMod/script"; //scriptRouter 路由

/***/ }),

/***/ "./app/bizMod/performance/router/index.js":
/*!************************************************!*\
  !*** ./app/bizMod/performance/router/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bizMod_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bizMod/network */ "./app/bizMod/performance/bizMod/network/index.js");
/* harmony import */ var _bizMod_download__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bizMod/download */ "./app/bizMod/performance/bizMod/download/index.js");
 // koa 路由中间件

 //networkRouter 路由  

 //downloadRouter 路由  

class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.twoLevelRoute = new koaRoute({
      prefix: "/performance" // 给路由统一加个前缀：

    });
    return this.twoLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 为script模块添加路由
    new networkRouter(this.app, this.twoLevelRoute);
    new downloadRouter(this.app, this.twoLevelRoute); // 添加路由

    this.router.use(this.twoLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (router)));

/***/ }),

/***/ "./app/routes/index.js":
/*!*****************************!*\
  !*** ./app/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __dirname = "app/routes";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redis */ "./app/redis/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./app/utils/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constant */ "./app/constant/index.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tools */ "graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user */ "./app/routes/user.js");
/* harmony import */ var _middleware_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/middleware/index */ "./app/middleware/index.js");
/* harmony import */ var _bizMod_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/bizMod/index */ "./app/bizMod/index.js");
/* harmony import */ var _view_App__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/view/App */ "./app/view/App.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_13__);
// import {
//   GraphQLObjectType,
//   GraphQLNonNull,
//   GraphQLSchema,
//   GraphQLString,
//   GraphQLList,
// } from "graphql/type";








 // import Home from "./home";




 // import { schema } from "@/graphql/schema";


 // console.log("bizModRouter======", bizModRouter);
// console.log("schema======", schema.typeDefs.schema);
// console.log('App===',App)

const typeDefs = (/* unused pure expression or super */ null && (`
  type Query {
    hello: String
  }
`)); // Provide resolver functions for your schema fields

const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

class Route {
  constructor(app) {
    this.app = app; // this.router = router;

    this.init();
  }

  createRouter() {
    this.router = new (koa_router__WEBPACK_IMPORTED_MODULE_5___default())({
      prefix: "/api" // 给路由统一加个前缀：

    });
  } // 添加中间件


  middleware() {
    // 添加 404 500 中间件
    (0,_middleware_index__WEBPACK_IMPORTED_MODULE_10__.common)(this.app, this.router);
  }

  checkToken() {
    this.router.use(async (ctx, next) => {
      const {
        request: {
          header
        },
        cookies,
        response
      } = ctx;
      const token = cookies.get("token") || header.token;
      await (0,_redis__WEBPACK_IMPORTED_MODULE_2__.getUserIfo)(token).then(async value => {
        console.log("value=", value);
        response.userInfo = value;
        await next();
      }).catch(error => {
        response.userInfo = null;
        ctx.response.body = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.merge)(_constant__WEBPACK_IMPORTED_MODULE_4__.unauthorized, {
          msg: "登录回话已过期，请重新登录"
        });
      }); //  await next();
    });
  } // 添加路由


  addRouters() {
    new _user__WEBPACK_IMPORTED_MODULE_9__.default(this.app, this.router); // bizModRouter(this.app, this.router);
    // new bizMod.abnormity.script.router(this.app, this.router)

    console.log("checkToken===="); // this.checkToken();
    // 查询
    // this.router.get("/data", async (ctx, next) => {
    //   const {
    //     query: { query = "", variables = {} },
    //     response,
    //     request,
    //   } = ctx;
    //   const {
    //     body: {
    //       // mutation = '', variables = {}
    //     },
    //   } = request;
    //   // console.log('cookies===', cookies.get('token'));
    //   // const { query = '', variables = {} } = ctx.query;
    //   // const { response } = ctx;
    //   // console.log('schema==',schema)
    //   // console.log("query==", query);
    //   // console.log("variables==", variables);
    //   // console.log("token=====", ctx.cookies.get("token"));
    //   // ctx.response.body = {
    //   //   name:'123'
    //   // }
    //   const baseSchema = `
    //                 schema {
    //                     query: Query
    //                     mutation: Mutation
    //                 }
    //           `;
    //   const schema = makeExecutableSchema({
    //     typeDefs: [
    //       schema.typeDefs.schema
    //       // baseSchema,
    //       // typeDefs,
    //       //   baseSchema,
    //       //   userType,
    //       //   songType,
    //       //   playlistType
    //     ],
    //     resolvers: schema.resolvers,
    //     //  merge(
    //     //   {},
    //     //   userResolvers,
    //     //   songResolvers,
    //     //   playlistResolvers
    //     // )
    //   });
    //   await graphql(schema, query, { ctx, next }, variables)
    //     .then((data) => {
    //       const { errors } = data;
    //       // console.log("data=", data);
    //       // console.log("stringify data=", JSON.stringify(data));
    //       if (errors) {
    //         response.body = merge(graphqlError, {
    //           errors,
    //         });
    //       } else {
    //         // console.log("get==", data);
    //         // ctx.response.body = {
    //         //   name:'123'
    //         // }
    //         response.body = data;
    //         // JSON.stringify(data);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("error==", error);
    //     });
    // });
    // //变异
    // this.router.post('/data', async (ctx, next) => {
    //     const {
    //         // query: { query = '', variables = {} },
    //         response,
    //         request,
    //     } = ctx;
    //     const {
    //         body: { mutation = '', variables = {} },
    //     } = request;
    //     await graphql(schema, mutation, { ctx, next }, variables)
    //         .then((data) => {
    //             const { errors } = data;
    //             if (errors) {
    //                 response.body = merge(graphqlError, {
    //                     errors,
    //                 });
    //             } else {
    //                 console.log('post==', data);
    //                 response.body = data;
    //             }
    //         })
    //         .catch((error) => {
    //             console.log('error==', error);
    //         });
    // });
    //  const server = new ApolloServer({ typeDefs, resolvers });
    //  this.router.get('/data',server.getMiddleware())

    this.router.get('*', async (ctx, next) => {
      ctx.response.type = 'html'; //指定content type

      let shtml = '';
      console.log('html====');
      await new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_6___default().readFile(path__WEBPACK_IMPORTED_MODULE_7___default().join(__dirname, '../build/index.html'), 'utfa8', function (err, data) {
          if (err) {
            reject();
            return console.log(err);
          }

          shtml = data;
          resolve();
        });
      }); // 替换掉 {{root}} 为我们生成后的HTML

      ctx.response.body = shtml.replace('{{root}}', (0,react_dom_server__WEBPACK_IMPORTED_MODULE_13__.renderToString)( /*#__PURE__*/React.createElement(_view_App__WEBPACK_IMPORTED_MODULE_12__.default, null)));
    }); // 挂载路由中间件

    this.app.use(this.router.routes()).use(this.router.allowedMethods()); // this.app.use(this.router.routes()).use(this.router.allowedMethods());
  }

  init() {
    // 添加中间件
    this.middleware(); //创建路由

    this.createRouter(); // 添加路由

    this.addRouters();
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Route);

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");;

/***/ })

};
;
//# sourceMappingURL=index.5e89de7a465cfe10238e.hot-update.js.map