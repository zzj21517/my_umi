/*
 * @Author: your name
 * @Date: 2021-04-08 14:58:50
 * @LastEditTime: 2021-04-08 14:59:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/typings.d.ts
 */
declare module '*.css';
declare module '*.less';
declare module "*.png";
declare module 'snapsvg-cjs';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}
