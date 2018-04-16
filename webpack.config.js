let webpack = require('webpack');
// let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// let ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin') ;
// let DashboardPlugin = require('webpack-dashboard/plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let config = require('./config/index');
/* eslint-disable-next-line */
let isProd = process.argv[3] === 'production';
let plugins = [];
if (!isProd) {
  config.entry.main.unshift('webpack-hot-middleware/client?reload=true','webpack/hot/only-dev-server');
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}));
  // plugins.push(new DashboardPlugin())
}else{
  plugins.push(new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}));

}
plugins.push(new MiniCssExtractPlugin({
  filename: config.cssPath+'[name].[chunkhash:8].css',
  chunkFilename: '[name].[id].[chunkhash:8].css'
}));
plugins.push(new webpack.optimize.SplitChunksPlugin({
  chunks: 'all',
  // 表示在压缩前的最小模块大小，默认为0；
  minSize: 30000,
  //表示被引用次数，默认为1
  minChunks: 1,
  //最大的按需(异步)加载次数，默认为1；
  maxAsyncRequests: 3,
  //最大的初始化加载次数，默认为1；
  maxInitialRequests: 3,
  // 拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成；设置ture则使用默认值
  name: true,
  //缓存组，目前在项目中设置cacheGroup可以抽取公共模块，不设置则不会抽取
  cacheGroups: {
    commons: {
      //拆分出来块的名字,默认是缓存组名称+"~" + [name].js
      name: 'test',
      // 同上
      chunks: 'all',
      // 同上
      minChunks: 3,
      // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的minSize，true：则使用0，false：使用上层minSize
      enforce: true,
      //test: 缓存组的规则，表示符合条件的的放入当前缓存组，值可以是function、boolean、string、RegExp，默认为空；
      test:''
    },
    //设置多个缓存规则
    vendor: {
      test: /node_modules/,
      chunks: 'all',
      name: config.jsPath+'vendor',
      //表示缓存的优先级
      priority: 10,
      enforce: true
    }
  }
}));

plugins.push(new CleanWebpackPlugin([config.outputPath],{
  root: config.root,
  // verbose: true,
  verbose: false,
  dry: false
}));

plugins.push(new HtmlWebpackPlugin({
  title: config.title,
  // inject: true, // body head false true
  favicon: config.publicPath+'/favicon.ico',
  template: config.publicPath+'/index.html',
  filename: 'index.html',
  // minify: true,
  // hash: false,
  // cache: true,
  // chunks: config.entry.main,
  // excludeChunks
  // chunksSortMode
}));
plugins.push(new CopyWebpackPlugin([
  {
    from: config.staticPath,
    to: config.outputPath
  }
]));

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'hidden-source-map' : 'eval',
  context: config.context,
  entry: config.entry,
  output: config.output,
  resolve: {
    alias: {
      Root: config.context,
    },
    extensions: [ '.js', '.json', '.less', '.css' ]
  },
  plugins,
  module: {
    rules: [
      { 
        test: /.(js|jsx|json)$/i, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
          presets: ['react', 'stage-0', 'es2015'],
          plugins: ['transform-decorators-legacy','transform-decorators', 
            // [
            //   "import", {
            //     style: true,
            //     // style: 'css',
            //     libraryName: 'antd'
            //   }
            // ]
          ]
        }
      },
      {
        test: /.(png|jpg|jpeg|svg)$/i,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit:8192,
              name:'[name]-[hash].[ext]',
              publicPath:'',
              outputPath: config.imagesPath
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name:'[name]-[hash].[ext]',
              publicPath:'',
              outputPath: config.fontsPath
            }
          }
        ]
      },
      {
        test: /.(css|less)$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader
        },{
          loader: 'css-loader'
        },{
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            modifyVars: {
              '@primary-color': '#1DA57A'
            }
          }
        }]
      },
    ]
  },
  // externals: {
  //   react: 'react'
  // }
  // devServer: {
  //   contentBase: config.publicPath,//[config.outputPath],//[config.publicPath,config.outputPath,config.root],
  //   compress: true,
  //   publicPath: config.publicPath,
  //   hot: true,
  //   // https: false,
  //   // noInfo: true,
  //   // historyApiFallback: true,
  //   port: 9000,
  //   // watchContentBase: true,
  //   // watchOptions: {
  //   //   poll: true
  //   // }
  // }
};