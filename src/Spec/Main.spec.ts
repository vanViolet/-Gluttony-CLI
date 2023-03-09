import assert from 'assert';
import { ChildProcess } from 'child_process';
import { MochaGlobals } from 'mocha';

const { spawn } = require('child_process');
const Help = require('./../Core/Features/Help');

const { describe, it }: MochaGlobals = require('mocha');

describe('-------------- Main --------------', () => {
  it('Output yang benar ketika gluttony mendapati argument --help', (done) => {
    const command: ChildProcess = spawn('ts-node', ['src/Main.ts', '--help']);
    let stdout = '';
    command.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    command.on('close', function () {
      assert.deepStrictEqual(stdout.trim(), Help().trim());
      done();
    });
  });

  it('Output yang benar ketika gluttony mendapati argument -?', (done) => {
    const command: ChildProcess = spawn('ts-node', ['src/Main.ts', '-?']);
    let stdout = '';
    command.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    command.on('close', function () {
      assert.deepStrictEqual(stdout.trim(), Help().trim());
      done();
    });
  });
});
