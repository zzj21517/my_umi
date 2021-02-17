/*
 * @Author: your name
 * @Date: 2021-02-17 20:29:43
 * @LastEditTime: 2021-02-17 21:50:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\utils\customizePromise.ts
 */
let allStatus = {
    PENDING: Symbol.for('PENGDING'),
    RESOLVE: Symbol.for('RESOLVE'),
    REJECT: Symbol.for('REJECT')
}
export class CustomizePromise {
    status: symbol
    resolveCallbackList: Array<Function> = []
    rejectCallbackList: Array<Function> = []
    value: any = undefined
    err: any = undefined
    constructor(executor: Function) {
        this.status = allStatus.PENDING
        this.resolve=this.resolve.bind(this)
        this.reject=this.reject.bind(this)
        try {
            executor(this.resolve, this.reject)
        } catch (err) {
            this.reject(err)
        }
    }
    resolve(res: any) {
        if (this.status === allStatus.PENDING) {
            this.value = res
            this.status = allStatus.RESOLVE
            this.resolveCallbackList.forEach(fn => fn())
        }
    }
    reject(err: any) {
        if (this.status === allStatus.PENDING) {
            this.err = err
            this.status = allStatus.REJECT
            this.rejectCallbackList.forEach(fn => fn())
        }
    }
    then(resolved: Function, rejected: Function) {
        if (this.status === allStatus.RESOLVE) {
            resolved(this.value)
        }
        if (this.status === allStatus.REJECT) {
            rejected(this.err)
        }
        if (this.status === allStatus.PENDING) {
            this.resolveCallbackList.push(() => {
                resolved(this.value)
            })
            this.rejectCallbackList.push(() => {
                rejected(this.err)
            })
        }
    }
}
