import { GetArgumentT } from '../Types/ArgsType';
module.exports = (): GetArgumentT => {
  return {
    '--help--': {
      Flag: ['--help', '-?'],
      Description: 'Looking For Options',
    },

    '--generate-to-jsx--': {
      Flag: ['--generate-to-jsx', '-Gx'],
      Description: '',
    },
  };
};
