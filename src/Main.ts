#!/usr/bin/env node
import { GetArgumentT } from './Types/ArgsType';

const GetArguments: () => GetArgumentT = require('./Core/GetArguments');

(function () {
  const __Args__ = process.argv.slice(2);
  if (GetArguments()['--help--']['Flag'].some((__s) => __Args__.includes(__s))) {
    console.log('hello');
  }
})();
