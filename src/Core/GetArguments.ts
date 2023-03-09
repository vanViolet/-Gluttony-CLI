export interface IGetArguments {
  ['--Help--']: Array<'--help' | '-?'>;
  ['--Generate-To-Jsx--']: Array<'--generate-to-jsx' | '-Gx'>;
}

module.exports = (): IGetArguments => {
  return {
    '--Help--': ['--help', '-?'],
    '--Generate-To-Jsx--': ['--generate-to-jsx', '-Gx'],
  };
};
