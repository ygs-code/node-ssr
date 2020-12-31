require("@babel/polyfill");
require("source-map-support").install();
exports.id = "index";
exports.ids = null;
exports.modules = {

/***/ "./app/config/index.js":
/*!*****************************!*\
  !*** ./app/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MYSQL_CONF": () => /* reexport safe */ _db_js__WEBPACK_IMPORTED_MODULE_0__.MYSQL_CONF,
/* harmony export */   "port": () => /* reexport safe */ _constant_js__WEBPACK_IMPORTED_MODULE_3__.port,
/* harmony export */   "tokenExpires": () => /* reexport safe */ _constant_js__WEBPACK_IMPORTED_MODULE_3__.tokenExpires
/* harmony export */ });
/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db.js */ "./app/config/db.js");
/* harmony import */ var _redis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redis.js */ "./app/config/redis.js");
/* harmony import */ var _redis_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redis_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_redis_js__WEBPACK_IMPORTED_MODULE_1__, "REDIS_CONF")) __webpack_require__.d(__webpack_exports__, { "REDIS_CONF": function() { return _redis_js__WEBPACK_IMPORTED_MODULE_1__.REDIS_CONF; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_redis_js__WEBPACK_IMPORTED_MODULE_1__, "port")) __webpack_require__.d(__webpack_exports__, { "port": function() { return _redis_js__WEBPACK_IMPORTED_MODULE_1__.port; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_redis_js__WEBPACK_IMPORTED_MODULE_1__, "tokenExpires")) __webpack_require__.d(__webpack_exports__, { "tokenExpires": function() { return _redis_js__WEBPACK_IMPORTED_MODULE_1__.tokenExpires; } });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.js */ "./app/config/token.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant.js */ "./app/config/constant.js");



 // export const MYSQL_CONF={
//     name:123
// }

/***/ }),

/***/ "./app/config/token.js":
/*!*****************************!*\
  !*** ./app/config/token.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export setExpirationTime */
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./app/config/constant.js");

const setExpirationTime = () => {
  const millisecond = new Date().getTime();
  const expiresTime = new Date(millisecond + tokenExpires); //一天后过期

  return expiresTime; // da.toUTCString(); //将 1598789234953这种格式的转换成=> "Sat, 29 Aug 2020 12:06:33 GMT"
};

/***/ }),

/***/ "./app/constant/httpCode.js":
/*!**********************************!*\
  !*** ./app/constant/httpCode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unauthorized": () => /* binding */ unauthorized
/* harmony export */ });
/* unused harmony exports graphqlError, unsupported */
const graphqlError = {
  code: 400,
  msg: "请求参数有误，graphql语法错误"
};
const unsupported = {
  //对于当前请求的方法和所请求的资源，请求中提交的实体并不是服务器中所支持的格式，因此请求被拒绝。
  code: 415,
  msg: "服务器已经理解请求，但是拒绝执行它"
};
const unauthorized = {
  // 当前请求需要用户验证. 如果验证不通过则返回401
  code: 401,
  msg: "当前请求需要用户验证."
};


/***/ }),

/***/ "./app/constant/index.js":
/*!*******************************!*\
  !*** ./app/constant/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unauthorized": () => /* reexport safe */ _httpCode__WEBPACK_IMPORTED_MODULE_0__.unauthorized
/* harmony export */ });
/* harmony import */ var _httpCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpCode */ "./app/constant/httpCode.js");
// 整体输出


/***/ }),

/***/ "./app/controller/user.js":
/*!********************************!*\
  !*** ./app/controller/user.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _service_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/user */ "./app/service/user.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./app/constant/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");




class Controller {
  static async add(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    const parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await userService.add(ctx, next, parameter);

    const getMessage = data => {
      const {
        status
      } = data;
      const message = {
        1: () => merge(unsupported, {
          msg: "该用户名已经被注册过,请重新输入用户名"
        }),
        2: () => merge(unsupported, {
          msg: "该手机号码已经被注册过,请重新输入手机号码"
        }),
        3: () => ({
          code: 200,
          msg: "注册成功"
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
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

/***/ "./app/db/user.js":
/*!************************!*\
  !*** ./app/db/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports addUser, deleteUser, queryUser */
/* harmony import */ var _mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mysql */ "./app/db/mysql.js");
 // 添加用户

const addUser = async ({
  name,
  phone,
  password
}) => {
  const sql = `insert into user(name,phone,password) values('${name}','${phone}',md5('${password}'));`;
  return await exec(sql);
}; //查询用户


const queryUser = async (andConditionData = {}, orConditionData = {}, sql) => {
  const andKeys = Object.keys(andConditionData);
  const orKeys = Object.keys(orConditionData);

  if (sql) {
    return await exec(sql);
  }

  sql = `select * from user where `;
  andKeys.forEach(key => {
    sql += key == "password" ? ` ${key}=md5('${andConditionData[key]}') and` : ` ${key}='${andConditionData[key]}' and`;
  });
  orKeys.forEach(key => {
    sql += key == "password" ? ` ${key}=md5('${orConditionData[key]}') or` : ` ${key}='${orConditionData[key]}' or`;
  });
  sql = andKeys.length >= 1 && orKeys.length == 0 ? sql.substring(0, sql.length - 3) : orKeys.length >= 1 ? sql.substring(0, sql.length - 2) : sql;
  return await exec(sql);
}; //删除用户


const deleteUser = async id => {
  const sql = `DELETE  FROM user  WHERE id=${id};`;
  return await exec(sql);
}; // 导出




/***/ }),

/***/ "./app/redis/index.js":
/*!****************************!*\
  !*** ./app/redis/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Redis": () => /* reexport safe */ _redis__WEBPACK_IMPORTED_MODULE_0__.Redis,
/* harmony export */   "getUserIfo": () => /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.getUserIfo
/* harmony export */ });
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redis */ "./app/redis/redis.js");
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt */ "./app/redis/jwt.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./app/redis/user.js");





/***/ }),

/***/ "./app/redis/jwt.js":
/*!**************************!*\
  !*** ./app/redis/jwt.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkToken": () => /* binding */ checkToken,
/* harmony export */   "userIdCheckToken": () => /* binding */ userIdCheckToken
/* harmony export */ });
/* unused harmony exports createToken, destroyToken */
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redis */ "./app/redis/redis.js");
/* harmony import */ var jwt_redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-redis */ "jwt-redis");
/* harmony import */ var jwt_redis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_redis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./app/utils/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config */ "./app/config/index.js");





const {
  sign,
  verify,
  decode
} = (jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default()); // 用用户id验证token

const userIdCheckToken = userId => {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.promise)((resolve, reject) => {
    _redis__WEBPACK_IMPORTED_MODULE_0__.redisClient.keys(`userid_${userId}_*`, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
}; //验证token


const checkToken = token => {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.promise)((resolve, reject) => {
    _redis__WEBPACK_IMPORTED_MODULE_0__.redisClient.keys(`userid_*_${token}`, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
};

const createToken = async (userInfo = {}, payload = {}) => {
  const {
    id = ""
  } = userInfo; //  产生token

  payload = merge({
    ctime: Date.now() //创建时间

  }, payload); //创建token

  const token = await sign(payload, `${id}`, {
    expiresIn: 0
  }); //获取用户token key

  const userIdTokens = await userIdCheckToken(id);

  if (userIdTokens && userIdTokens.length >= 1) {
    // 删除多余的key实现单点登录
    userIdTokens.forEach(async key => {
      await Redis.del(key);
    });
  } // 重新设置 redis 


  await Redis.set(`userid_${id}_${token}`, JSON.stringify(userInfo));
  redisClient.pexpire(`userid_${id}_${token}`, tokenExpires);
  return token;
}; //销毁token


const destroyToken = async tokenOrId => {
  const userIdTokens = (await userIdCheckToken(tokenOrId)) || [];
  const tokens = (await checkToken(tokenOrId)) || [];
  merge(userIdTokens, tokens).forEach(async key => {
    await Redis.del(key);
  });
  return "成功删除token";
};



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
    // new User(this.app, this.router);
    // bizModRouter(this.app, this.router);
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

/***/ "./app/routes/user.js":
/*!****************************!*\
  !*** ./app/routes/user.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _controller_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/user */ "./app/controller/user.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);

 // koa 路由中间件

class Route {
  constructor(app, router) {
    this.app = app;
    this.router = router;
    this.init();
  }

  createRouter() {
    this.secondaryRoute = new Router({
      prefix: "/user" // 给路由统一加个前缀：

    });
    return this.secondaryRoute;
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
    // 添加路由
    this.registered();
    this.login();
    this.router.use(this.secondaryRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

  registered() {
    // 添加 接口
    this.secondaryRoute.post("/register", controller.add);
  }

  login() {
    // 添加 接口
    this.secondaryRoute.post("/login", controller.login);
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Route)));

/***/ }),

/***/ "./app/service/user.js":
/*!*****************************!*\
  !*** ./app/service/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _db_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/user */ "./app/db/user.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./app/constant/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redis */ "./app/redis/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./app/config/index.js");






class Service {
  static list(page) {
    console.log('page=', page);
    const dataList = {
      list: [{
        time: '2019-7-10',
        id: 1,
        title: 'this is news 1',
        url: '/news/1'
      }, {
        time: '2019-8-10',
        id: 2,
        title: 'this is news 2',
        url: '/news/2'
      }]
    };
    return dataList.list[page] || {};
  } //注册用户


  static async add(ctx, next, parameter) {
    const {
      username: name,
      phone,
      password
    } = parameter;
    /*
    1 查询用户名是否被注册过，
    2 查询手机号码是否被注册过
    3 如果都没有被注册那么就可以注册
    */

    let userInfo = await this.queryUser({
      name
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (userInfo && userInfo.id) {
      return {
        status: 1
      };
    }

    userInfo = await this.queryUser({
      phone
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (userInfo && userInfo.id) {
      return {
        status: 2
      };
    }

    const data = await addUser({
      name,
      phone,
      password
    });

    if (data) {
      return {
        status: 3
      };
    }
  } // 编辑用户


  static async edit(ctx, next, parameter) {} // 数据库中查询用户


  static async queryUser(...ags) {
    const userData = await queryUser(...ags);
    return userData;
  } // 登录


  static async login(ctx, next, parameter = {}) {
    const {
      username: name,
      phone,
      password
    } = parameter;
    const {
      request,
      response,
      cookies
    } = ctx;
    /*
    1.先查询用户名是否正确，
    2.查询用户和密码是否正确
    3.创建token,存储到redis中
    4.把用户信息挂载response中
    */

    let userInfo = await this.queryUser({
      name
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (!userInfo) {
      return {
        status: 1
      };
    }

    userInfo = await this.queryUser({
      password
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (!userInfo) {
      return {
        status: 2
      };
    }

    userInfo = await queryUser({
      name,
      password
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;
    /*
    创建 createToken  
    */

    const token = await createToken(userInfo);
    delete userInfo.password;
    ctx.response.userInfo = userInfo;
    console.log('setExpirationTime=', setExpirationTime()); // console.log('token=', token);
    // console.log('request=', request);
    // console.log('session=', session);

    console.log('cookies===', cookies.get('token')); // cookie.expires = false;
    // cookie.maxAge = 5 * 60 * 1000;

    cookies.set('token', token, {
      httpOnly: false,
      overwrite: false,
      expires: setExpirationTime() // domain: 'http://localhost/',

    });

    if (userInfo) {
      //登录成功
      return {
        status: 3,
        token,
        userInfo
      };
    }
  }

}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Service)));

/***/ })

};
;
//# sourceMappingURL=index.3e7d5006d0ca9eebeb76.hot-update.js.map