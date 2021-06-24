/*
 * @Author: your name
 * @Date: 2021-06-24 14:47:38
 * @LastEditTime: 2021-06-24 17:38:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/demo/linkedList/index.tsx
 */
import React, { useState, useEffect } from 'react'

class ListNode {
    constructor(key) {
        this.next = null
        this.key = key
    }
}

class List {
    constructor() {
        this.head = null
        this.length = 0
    }

    static createNode(key) {
        return new ListNode(key)
    }

    insert(node) {
        if (this.head) {
            node.next = this.head
        } else {
            node.next = null
        }
        this.head = node
        this.length++
    }

    find(key) {
        let node = this.head
        while (node !== null && node.key !== key) {
            node = node.next;
        }
        return node
    }

    delete(node) {
        if (this.length === 0) {
            throw 'node is undefined'
        }
        let prevNode = this.head
        while (prevNode.next !== node) {
            prevNode = prevNode.next
        }
        prevNode.next = node.next
        this.length--
    }
}


export default function LinkedListCom() {
    useEffect(() => {
        let list = new List()
        list.insert({
            value: 1
        })
        list.insert({
            value: 2
        })
        console.log(list, 'lll')
    }, [])
    return (
        <div>

        </div>
    )
}

