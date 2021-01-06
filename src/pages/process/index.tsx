import React, { Component, PureComponent, memo } from 'react';
type TProps = {
  stage?: string;
  name?: string;
};

function HighHoc<P extends Object>(Com: React.ComponentType<P>) {
  // 获取name
  const name = '高阶组件';
  class WrapCom extends Component {
    render() {
      return <Com {...(this.props as P)} name={name} />
    }
  }
  return WrapCom
}
@HighHoc
class Kaikeba extends Component<Readonly<TProps>> {
  render() {
    return (
      <div>
        {this.props.stage}--{this.props.name}
      </div>
    );
  }
}

// const WrapKaikeba = HighHoc(Kaikeba);

export default class Hoc extends Component {
  render() {
    return (
      <div>
        <Kaikeba stage="reactee"></Kaikeba>
      </div>
    );
  }
}
