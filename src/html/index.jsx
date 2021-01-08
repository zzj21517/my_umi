
import React, { Component } from './kreact'

class Comp2 extends Component {
    render() {
        return (
            <div>
                <h2>hi {this.props.name}</h2>
            </div>
        )
    }
}

function render(vnode, container) {
    container.innerHTML = `<pre>${JSON.stringify(vnode, null, 2)}</pre>`
}

// export default { render }

// ReactDOM.render(React.createElement('div', {}, 'zzj'), document.querySelector('#root'))