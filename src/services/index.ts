/*
 * @Author: zzj
 * @Date: 2021-01-20 10:05:54
 * @LastEditTime: 2021-01-20 10:06:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/services/index.ts
 */

import request from '@/utils/request';
// 微信登录
export const weixinLogin = async (params: any) => {
    return await request('/v1/user/weixin/login', {
        method: 'post',
        data: params,
    });
};
