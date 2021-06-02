// jsx 对js语法的扩展 createElement->vnode->dom
import React, { Component } from 'react'

// class Component {
//     // 区分class还是function
//     static isClassComponent=true
//     constructor(props) {
//         this.props = props
//         this.state = {}
//     }
// }

function createElement(type, props, ...children) {
    console.log(arguments)
    props.children = children
    let vtype
    // 原生标签
    if (typeof type === 'string') {
        vtype = 1
    } else if (typeof type === 'function') {
        // 类组件
        if (type.isClassComponent) {
            vtype = 2
        } else { //函数组件
            vtype = e
        }
    }
    return createVNode(vtype, type, props)
}

// type:标签类型，如div
// vtype:元素类型，1-html;2-function;3-class
// props
function createVNode(vtype, type, props) {
    const vnode = { vtype, type, props }
    return vnode
}

function initVNode(vnode) {
    const { vtype } = vnode
    if (!vtype) {
        // 文本节点
        return document.createTextNode(vnode)
    }

    if (vtype === 1) {
        // 原生元素
        return createElement1(vnode)
    } else if (vtype === 2) {
        // 类组件
        return createClassCom(vnode)
    } else if (vtype === 3) {
        // 函数组件
        return createFuncComp(vnode)
    }
}

function createElement1(vnode){
    // 根据type创建元素
    const {type,props}=vnode
    const node=document.createElement(type)
    // 处理属性
    const {key,children,...rest}=props
    Object.keys(rest).forEach(key=>{
        // 处理特别属性名 className,htmlFor
        
    })
}

// class Com extends Component {
//     render() {
//         return (
//             <div>
//                 sss {this.props.name}
//             </div>
//         )
//     }
// }

export default class index extends Component {
    render() {
        return (
            <div>
                {/* {createElement('div', {}, 'zzj')} */}
            </div>
        )
    }
}

