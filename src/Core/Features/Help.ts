module.exports = function () {
  const _message = `
  Options :

  --help, -?                              ||  Looking for flag
  --generate-to-jsx, -Gx                  ||  Generate To JSX , required path in last arguments

      `;

  console.log(_message);
  return _message;
};

(function () {
  const msg = `
  Options :

  --help, -?                              ||  Looking for flag
  --generate-to-jsx, -Gx                  ||  Generate To JSX , required path in last arguments

      `;

  if (process.argv.slice(2).includes('--help')) {
    console.log(msg);
  }
});
