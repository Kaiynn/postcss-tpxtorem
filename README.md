# postcss-tpxtorem
postcss插件-将css样式表内的的px属性转换为rem

### Install

```
npm install postcss-tpxtorem --save dev
```

### Methods
pxtorem({baseNum: 50, digit: 4}) // baseNum换算基数 digit保留小数位数

### Usage

```js
const pxtorem = require('postcss-tpxtorem')
...
    {
        
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            ident: 'postcss',
            config: false,
            plugins: [
                ...
                pxtorem({baseNum: 50, digit: 4})
                ...
            ]
          },
        },
      },
...

```

### License
MIT