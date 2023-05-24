/*
 * @Author: kayinn许小强 79544105@qq.com
 * @Date: 2023-05-24 10:01:18
 * @LastEditors: kayinn许小强 79544105@qq.com
 * @LastEditTime: 2023-05-24 15:31:56
 * @FilePath: /postcss-tpxtorem/webpack.config.js
 * @Description: webpack配置文件
 */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:'production',
    entry: {
      "index.cjs": {
        import: './src/index.ts',
        library: {
          type: 'commonjs2',
        },
  
      },
      "index.esm": {
        import: './src/index.ts',
        library: {
          type: 'module',
        },
      },
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name].js",
        clean: true,
    },  
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
      new CleanWebpackPlugin({
        dry: false,   						
        cleanOnceBeforeBuildPatterns:[
          '**/*',
        ]
      }),
    ],
    experiments: {
      outputModule: true
    }
}