export interface ArgumentFlagT<Flag, Desc> {
  ['Flag']: Flag;
  ['Description']: Desc;
}

export interface GetArgumentT {
  ['--help--']: ArgumentFlagT<Array<'--help' | '-?'>, string>;
  ['--generate-to-jsx--']: ArgumentFlagT<Array<'--generate-to-jsx' | '-Gx'>, string>;
}
