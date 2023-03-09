import { expect } from 'chai';
import { describe, it } from 'mocha';
import { IGetFeatures } from './GetFeatures';

const GetFeatures: () => IGetFeatures = require('./GetFeature');
const Help = require('./Feature/Help');
const GenerateToJsx = require('./Feature/GenerateToJsx');

describe('Get Featured Test ', () => {
  it('Function GetFeature()["Help"]() Should Return Help Function In Feature', () => {
    expect(GetFeatures()['Help']()).to.equal(Help());
  });

  it('Should Return Function GenerateToJsx', () => {
    expect(GetFeatures()['GenerateToJsx']()).to.equal(GenerateToJsx());
  });
});
