import {
  Source,
  validateSchema,
  parse,
  validate,
  execute,
  formatError,
  getOperationAST,
  specifiedRules,
  buildSchema,
} from "graphql";

import { CheckDataType } from "./CheckDataType";
import chalk from "chalk";

const promise = (fn = () => {}) => {
  return new Promise((resolve, reject) => {
    fn(resolve, reject);
  });
};

const merge =
  Object.assign ||
  function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
const checkSchema = (name) => {
  let cache = [];
  return function checkSchemas(target) {
    for (var i = 1; i < arguments.length; i++) {
      let source = new Object({ ...arguments[i] });
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (
            Object.prototype.toString.call(source[key]) == "[object Module]" ||
            CheckDataType.isObject(source[key])
          ) {
            target[key] = {
              ...(target[key] || {}),
              ...checkSchemas(target[key], source[key]),
            };
          } else {
            if (cache.includes(key)) {
              throw new Error(
                chalk.red(`graphql schema 发生 ${key}命名冲突,请重新命名${key}`)
              );
            }
            !["Mutation", "Query", "Subscription"].includes(key) &&
              cache.push(key);
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
};

const exeValidateSchema = async (schema) => {
  let errors = null;
  try {
    errors = await validateSchema(buildSchema(schema));
  } catch (error) {
    // console.error(error);
    errors = error;
  }

  return errors && errors.length === 0 ? 0 : errors;
};

export { promise, merge, checkSchema, exeValidateSchema };
