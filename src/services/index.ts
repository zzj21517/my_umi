/*
 * @Author: zzj
 * @Date: 2021-01-20 10:05:54
 * @LastEditTime: 2021-01-20 20:54:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/services/index.ts
 */

import request from '@/utils/request';
// 微信登录
export const reqLogin = async (params: any) => {
    return await request('/login', {
        method: 'post',
        data: params,
    });
};
