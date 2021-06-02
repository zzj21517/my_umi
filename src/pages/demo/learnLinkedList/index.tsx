/*
 * @Author: your name
 * @Date: 2021-02-07 11:46:12
 * @LastEditTime: 2021-02-07 14:41:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/learnLinkedList/index.tsx
 */


import React, { Component } from 'react'

export default class LearnLinkedList extends Component {
    componentDidMount() {
        // let l1 = {
        //     val: 1,
        //     next: {
        //         val: 2,
        //         next: {
        //             val: 4,
        //             next: null
        //         }
        //     }
        // }
        // let l2 = {
        //     val: 1,
        //     next: {
        //         val: 3,
        //         next: {
        //             val: 4,
        //             next: null
        //         }
        //     }
        // }

        // this.mergeLinkedList(l1, l2)

        // 设置空对象
        let tempLink = {};

        // 设置循环链表
        let cycleLink = {
            val: 2,
            next: {
                val: 0,
                next: {
                    val: 4,
                    next: tempLink, // 最后指向空对象
                },
            },
        };

        // 空对象指向循环链表，使链表变成真的环
        tempLink.next = cycleLink;

        // 设置其他节点，接着循环链表
        const link = {
            val: 3,
            next: cycleLink,
        };
        // 3 -> 2 -> 0 -> 4 -> 2 -> 0 -> 4 -> cycle

        const hasCycle = (head) => {

            // 至少 2 个节点才能构成一个环
            if (!head || !head.next) {
                return false;
            }

            // 设置快慢指针
            let slow = head;
            let fast = head.next;

            // 如果快指针一直没有追上慢指针
            while (slow !== fast) {
                console.log(slow, fast)
                // 如果没有环，则快指针会抵达终点
                if (!fast || !fast.next) {
                    return false;
                }
                slow = slow.next;
                fast = fast.next.next;
            }

            console.log(slow,fast,slow===fast,'ffff')

            // 如果有环，那么快指针会追上慢指针
            return true;
        };
        console.log(hasCycle(link));
    }

    mergeLinkedList = (l1: any, l2: any) => {
        if (!l1) {
            return l2
        }
        if (!l2) {
            return l1
        }
        if (l1.val < l2.val) {
            l1.next = this.mergeLinkedList(l1.next, l2)
            console.log(l1, 'l1')
            return l1
        } else {
            l2.next = this.mergeLinkedList(l1, l2.next)
            console.log(l2, 'l2')
            return l2
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

