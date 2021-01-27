/*
 * @Author: zzj
 * @Date: 2021-01-27 21:45:07
 * @LastEditTime: 2021-01-27 21:48:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\plugins\checkCompilerHooksPlugin.ts
 */

const pluginName = 'checkCompilerHooksPlugin'

module.exports = class checkCompilerHooksPlugin {
    apply(compiler: { hooks: {} }) {
        for (let hook of Object.keys(compiler.hooks)) {
            console.log(hook,'hook')
        }
    }
}
