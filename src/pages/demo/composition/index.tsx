import React, { Component } from 'react'


function RadioGroup(props: { name: string, children: Array<React.ReactElement> }) {
    return (
        <div>
            {React.Children.map(props.children, (child) => {
                return React.cloneElement(child, { name: props.name })
            })}
        </div>
    )
}

function Radio({ children, ...reset }: { children: React.ReactNode, value: string }) {
    return (
        <label>
            {children}
            <input type='radio' {...reset} />
        </label>
    )
}


export default class Composition extends Component {
    render() {
        return (
            <div>
                <RadioGroup name='mvvm' >
                    <Radio value='vue' >vue</Radio>
                    <Radio value='react' >react</Radio>
                    <Radio value='angular' >angular</Radio>
                </RadioGroup>
            </div>
        )
    }
}
