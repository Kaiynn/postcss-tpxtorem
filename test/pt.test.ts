/*
 * @Author: kayinn许小强 79544105@qq.com
 * @Date: 2023-05-24 10:02:03
 * @LastEditors: kayinn许小强 79544105@qq.com
 * @LastEditTime: 2023-05-24 15:33:38
 * @FilePath: /postcss-tpxtorem/test/pt.test.ts
 * @Description: 测试案例
 */

const postcssToRem = require('../src/index');

it('postcssToRem', () => {
    const mockCallback = postcssToRem({baseNum:50, digit:2});
    mockCallback.Once();
    expect(mockCallback.Declaration({value:"12px"})).toEqual("0.24rem")
})