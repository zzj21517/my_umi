// jsx 对js语法的扩展 createElement->vnode->dom
import React, { Component} from 'react'

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
    return { type, props }
}

// type:标签类型，如div
// vtype:元素类型，1-html;2-function;3-class
// props
function createVNode(vtype, type, props) {
    const vnode = { vtype, type, props }
    return vnode
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

