/*
 * @Author: your name
 * @Date: 2021-04-16 10:45:05
 * @LastEditTime: 2021-04-16 15:41:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/learnMinio/index.tsx
 */

import React, { useState, useEffect } from 'react'
import { Upload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
const Minio = require('minio')
const fs = require('fs')
export default function LearnMinio() {
    useEffect(() => {
        // initMinio()
    }, [])

    function initMinio() {
        let minioClient = new Minio.Client({
            endPoint: '123.150.252.54',
            port: 19000,
            useSSL: false,
            accessKey: 'minioadmin',
            secretKey: 'minioadmin'
        })
        minioClient.fPutObject('ftzart-test', 'first_img', require('@/asserts/images/cat.jpg'), {
            'Content-Type': 'application/octet-stream',
            'X-Amz-Meta-Testing': 1234,
            'example': 5678
        }, (err: any, etag: any) => {
            if (err) {
                return console.log(err)
            }
            console.log('file uploaded successfully', etag)
        })
    }
    return (
        <div>
            <Upload
                name='file'
                action='http://localhost:3000/minio'
            >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>,
        </div >
    )
}
