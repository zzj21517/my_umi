// 自定义实现call

let foo = {
    name: 'zzj'
}

function bar() {
    // @ts-ignore
    console.log(arguments)
}

// bar.call(foo)

// 原理：改变this指向，并执行函数
// 第一步
// 1.将函数设置为对象的属性
// 2.执行这个函数
// 3.删除这个函数
// function ownCall(context){
//     context.fn=this
//     context.fn()
//     delete context.fn
// }

// 第二步
// 传入参数(剔除第一个参数)
// function ownCall(context) {
//     let args = [...arguments]
//     args.shift()
//     context.fn = this
//     context.fn([...args])
//     delete context.fn
// }

// 第三步
// this参数可以传null,当为null时候，指向window
// 函数可以有返回值
function ownCall(context: any) {
    context = context || window
    console.log(context,'ccc')
    let args = [...arguments]
    args.shift()
    // @ts-ignore
    context.fn = this
    let result = context.fn([...args])
    delete context.fn
    return result
}


bar.ownCall=ownCall
// @ts-ignore
bar.ownCall(foo,1,2,3,4)