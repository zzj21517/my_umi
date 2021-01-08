export function createVNode(vtype, type, props) {
  let vnode = {
    vtype: vtype, //用于区分函数组件，类组件，原生组件
    type: type,
    props: props
  }
}
