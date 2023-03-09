#!/usr/bin/env node
import ansiColors from 'ansi-colors';
import { IGetArguments } from './Core/GetArguments';
import { IGetFeatures } from './Core/GetFeatures';

const {
  GetArguments,
  GetFeatures,
  Color,
}: {
  GetArguments: () => IGetArguments;
  GetFeatures: () => IGetFeatures;
  Color: typeof ansiColors;
} = {
  GetArguments: require('./Core/GetArguments'),
  GetFeatures: require('./Core/GetFeatures'),
  Color: require('ansi-colors'),
};

(async function () {
  const __Args__ = process.argv.slice(2);
  if (__Args__.length) {
    if (GetArguments()['--Help--'].some((_someOfFlag) => __Args__.includes(_someOfFlag))) {
      GetFeatures()['Help']();
    }
  } else {
    console.error(`\nBerikan Argument ${Color.yellow(GetArguments()['--Help--'].join(', '))} untuk melihat pilihan argument\n`);
  }
})();
