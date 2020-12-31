require("@babel/polyfill");
require("source-map-support").install();
exports.id = "index";
exports.ids = null;
exports.modules = {

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
      prefix: "/" // 给路由统一加个前缀：

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
        fs__WEBPACK_IMPORTED_MODULE_6___default().readFile(path__WEBPACK_IMPORTED_MODULE_7___default().join(__dirname, '../view/template/index.html'), 'utfa8', function (err, data) {
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

/***/ })

};
;
//# sourceMappingURL=index.d32b2378be65f2472e0c.hot-update.js.map