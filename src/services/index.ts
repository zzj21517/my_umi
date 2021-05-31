/*
 * @Author: zzj
 * @Date: 2021-01-20 10:05:54
 * @LastEditTime: 2021-05-31 17:22:15
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

// 上传大文件
export const uploadBigFile = async (params: any) => {
    return await request('/bigFile/upload', {
        method: 'post',
        body: params
    })
}

// 合并文件
export const concatFile = async (params: any) => {
    return await request('/bigFile/concat', {
        method: 'post',
        data: params
    })
}
