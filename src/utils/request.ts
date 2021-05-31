/*
 * @Author: zzj
 * @Date: 2021-01-20 09:53:53
 * @LastEditTime: 2021-05-31 14:55:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/utils/requests.ts
 */

import { extend, ResponseError } from 'umi-request';
import { notification, message } from 'antd';
const devBaseUrl = '/api';
let currentBaseUrl = '/api';
if (process.env.NODE_ENV === 'development') {
    currentBaseUrl = devBaseUrl;
} else {
    currentBaseUrl = process.env.apiUrl || currentBaseUrl;
}

// 请求接口中的headers
export interface IHeaders {
    contentType: string;
    accept: string;
    timeout: number;
    authorization?: string;
    [key: string]: any
}
interface ICodeMessage {
    [index: string]: string;
}
const codeMessage: ICodeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: ResponseError<any>) => {
    const { response } = error;
    if (response && response.status) {
        const errorText =
            codeMessage[String(response.status)] || response.statusText;
        const { status, url } = response;

        notification.error({
            message: `请求错误 ${status}: ${url}`,
            description: errorText,
        });
    } else if (!response) {
        notification.error({
            message: '网络异常',
            description: '您的网络发生异常，无法连接服务器',
        });
    }

    return response;
};
const request = extend({
    errorHandler,
    // 默认错误处理
    credentials: 'include', // 默认请求是否带上cookie
});
// request拦截器, 改变url 或 options.
request.interceptors.request.use((url: string, options) => {
    const headers: IHeaders = {
        contentType: 'application/json',
        accept: 'application/json',
        timeout: 2000,
    };
    return {
        url: `${currentBaseUrl}${url}`,
        options: { ...options, headers: headers },
    };
});

// response拦截器, 处理response
request.interceptors.response.use(async (response: Response, options) => {
    const data = await response.clone().json();
    // 401删除登录信息，退出登录
    if (data.code == '401') {
    } else if (data.code == 200 && data.subCode != 0) {
        message.error(data.subMessage);
    }
    return response;
});

export default request;

