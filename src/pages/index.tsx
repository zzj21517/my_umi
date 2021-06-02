/*
 * @Author: your name
 * @Date: 2021-06-01 10:03:19
 * @LastEditTime: 2021-06-01 11:13:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/index.tsx
 */
import React, { useState, useEffect } from 'react'
import { Link } from 'umi'
import styles from './index.less'
export default function Index() {
    return (
        <div className={styles.home} >
            <div className="home_container">
                <div className="container_title">
                    <div className="title_zh">个人网站</div>
                    <div className="title_en">Personal Website</div>
                </div>
                <ul className="container_main">
                    <li className="main_item"><Link to='/' >技术文章</Link></li>
                    <li className="main_item"><Link to='/' >文档中心</Link></li>
                    <li className="main_item"><Link to='/' >更新日志</Link></li>
                </ul>
                <div className="container_footer">
                    Contact
                </div>
            </div>
        </div>
    )
}
