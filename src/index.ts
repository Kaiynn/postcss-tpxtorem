/*
 * @Author: kayinn许小强 79544105@qq.com
 * @Date: 2023-05-24 10:01:40
 * @LastEditors: kayinn许小强 79544105@qq.com
 * @LastEditTime: 2023-05-24 17:10:24
 * @FilePath: /postcss-torem/src/index.ts
 * @Description: postcss插件 - 将样式表的px单位转换为rem
 */
interface Configs {
    baseNum: number;
    digit: number;
}

interface Decl {
    value: string;
    [propName: string]: any;
}

interface ExportModule {
    postcssPlugin: string;
    Once: (root:string) => void;
    Declaration: (decl:Decl) => void;
}

interface regexpCallback {
    (a: string, b: string): string;
}

/**
 * @description: px转rem单位换算
 * @param {Number} baseNum 换算基数
 * @param {Number} digit 保留位数
 * @return {String} replaceVal 转后的数值+rem拼接字符串
 */
function pxReplaceHandle(baseNum:number, digit:number):regexpCallback {
    return (value, $1) => {
      if (!$1) return value;
      const pxNUm = Number.parseFloat($1);
      const replaceVal = toFixed(pxNUm / baseNum, digit);
      return replaceVal === 0 ? "0" : replaceVal + "rem";
    };
}

/**
 * @description: 保留小数位数的换算
 * @param {Number} number 需要保留小数的值
 * @param {Number} precision 保留小数几位
 * @return {Number} 保留小数后的值
 */
function toFixed(number:number, precision:number):number {
    const multiplier = Math.pow(10, precision + 1),
      wholeNumber = Math.floor(number * multiplier);
    return (Math.round(wholeNumber / 10) * 10) / multiplier;
}

/**
 * @description: postcss-插件
 * @param {Object} configs {baseNum, digit} 换算基数，保留小数位数
 * @return {Object} postcss-插件配置项目
 */
module.exports = (configs:Configs):ExportModule => {
    let pxReplaceFun: regexpCallback;
    let replaceEx = /(\d*\.?\d+)px/g;

    return {
        postcssPlugin: 'postcss-torem',
        
        Once (root) {
            const  { baseNum, digit } = configs
            pxReplaceFun = pxReplaceHandle(baseNum, digit)
        },
        
        Declaration (decl) {
            const value = decl.value.replace(replaceEx, pxReplaceFun);
            decl.value = value;
            return value
        },
      
    }
}
module.exports.postcss = true