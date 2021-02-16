/*
 * @Author: your name
 * @Date: 2021-02-15 21:59:36
 * @LastEditTime: 2021-02-16 16:15:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\test\index.test.ts
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Counter from '../../pages/counter'
import { beforeEach, afterEach, expect, it } from '@jest/globals'
let container: HTMLElement | null
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container!)
    container = null
})
it('can render and update a counter', () => {
    // 首次测试render 和componentDidMount
    act(() => {
        ReactDOM.render(<Counter name='zzj' />,container!)
    })
    const button = container?.querySelector('button')
    const label = container?.querySelector('p')
    expect(label?.textContent)?.toBe('You clicked 0 times')
    expect(document.title)?.toBe('You clicked 0 times')

})

