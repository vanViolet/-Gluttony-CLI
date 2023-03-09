export interface IGetFeatures {
  Help: () => void;
  GenerateToJsx: () => void;
}

module.exports = function (): IGetFeatures {
  return {
    Help: require('./Features/Help'),
    GenerateToJsx: require('./Features/GenerateToJsx'),
  };
};
