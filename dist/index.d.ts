declare module 'gsleep/index' {
  export default function sleep(ms: number): Promise<void>;

}
declare module 'gsleep' {
  import main = require('gsleep/src/index');
  export = main;
}