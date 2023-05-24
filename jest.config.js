/*
 * @Author: kayinn许小强 79544105@qq.com
 * @Date: 2023-05-24 14:09:11
 * @LastEditors: kayinn许小强 79544105@qq.com
 * @LastEditTime: 2023-05-24 15:32:28
 * @FilePath: /postcss-tpxtorem/jest.config.js
 * @Description: jest配置文件
 */

module.exports = {
    "transform": {
      ".(ts|tsx)": "ts-jest"
    },
    "testRegex": "/test/.*\\.(test|spec)\\.(ts)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "collectCoverageFrom": [
      "src/*.{js,ts}",
      "src/**/*.{js,ts}"
    ],
  }