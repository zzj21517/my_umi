export class Component {
  // 这个组件区分是不是class组件
  static isClassComponent = true
  constructor(props) {
    this.props = props
    this.state = {}
  }
}

function createElement(type, props, ...children) {
  console.log(arguments)
  props.children = children
  return {
    type,
    props
  }
}

export default {
  createElement
}
