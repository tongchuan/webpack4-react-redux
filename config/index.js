let path = require('path');

let root = process.cwd();

let entryPath = 'src';
let outputPath = 'dist';
let publicPath = 'public';
let staticPath = 'static';
let jsPath = 'js/';
let cssPath = 'css/';
let imagesPath = './images/';
let fontsPath = './fonts/';
//path.resolve(__dirname);
// console.log(root)
// console.log()
module.exports = {
  title: 'ZTC',
  root: root,
  host: 'http://0.0.0.0',
  port: 9000,
  staticPath: path.resolve(root, staticPath),
  entryPath: path.resolve(root, entryPath),
  outputPath: path.resolve(root,outputPath),
  publicPath: path.resolve(root,publicPath),
  jsPath: jsPath,
  cssPath: cssPath,
  imagesPath: imagesPath,
  fontsPath: fontsPath,
  context: path.resolve(root, entryPath),
  entry: {
    main: ['./index.js'],
  },
  output: {
    path: path.resolve(root,outputPath),
    pathinfo: false,
    publicPath: './',
    filename: jsPath+'[id].[hash].js',
    chunkFilename: '[name]-[id]-[hash].[chunkhash].js',
    hotUpdateChunkFilename: '[id].[hash].hot-update.js',
    hotUpdateMainFilename: '[hash].hot-update.json',
  }
}