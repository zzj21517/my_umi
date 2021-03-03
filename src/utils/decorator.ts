/*
 * @Author: your name
 * @Date: 2021-03-02 10:01:26
 * @LastEditTime: 2021-03-02 17:11:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/utils/decorator.ts
 */
/**
 * @description:log装饰器 
 * @param {string} type:描述
 * @return {*} 返回装饰的方法返回值
 */
export function log(type: string) {
    return (target: any, name: string, descriptor: PropertyDescriptor) => {
        const fn = descriptor.value
        descriptor.value = (...args: any) => {
            console.info(`(${type}) 正在执行：${name}(${args}=?)`)
            let ret;
            try {
                ret = fn.apply(target, args)
                console.info(`(${type}) 成功 ：${name}(${args})=>${ret}`)
            } catch (err) {
                console.error(`(${type}) 失败：${name}(${args})=>${err}`)
            }
            return ret
        }
    }
}


const { defineProperty, getPrototypeOf } = Object;

function bind(fn, context) {
    if (fn.bind) {
        return fn.bind(context);
    } else {
        return function __autobind__() {
            return fn.apply(context, arguments);
        };
    }
}

function createDefaultSetter(key) {
    return function set(newValue) {
        Object.defineProperty(this, key, {
            configurable: true,
            writable: true,
            enumerable: true,
            value: newValue
        });

        return newValue;
    };
}

export function autobind(target, key, { value: fn, configurable, enumerable }) {
    if (typeof fn !== 'function') {
        throw new SyntaxError(`@autobind can only be used on functions, not: ${fn}`);
    }

    const { constructor } = target;

    return {
        configurable,
        enumerable,

        get() {

            /**
             * 使用这种方式相当于替换了这个函数，所以当比如
             * Class.prototype.hasOwnProperty(key) 的时候，为了正确返回
             * 所以这里做了 this 的判断
             */
            if (this === target) {
                return fn;
            }

            const boundFn = bind(fn, this);

            defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: false,
                value: boundFn
            });

            return boundFn;
        },
        set: createDefaultSetter(key)
    };
}