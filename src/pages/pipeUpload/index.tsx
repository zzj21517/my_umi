/*
 * @Author: your name
 * @Date: 2021-05-31 10:27:00
 * @LastEditTime: 2021-05-31 22:14:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/pipeUpload/index.tsx
 */

import React, { useState, useEffect } from 'react'
import { Upload, Button } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { uploadBigFile, concatFile } from '@/services/index'
import styles from './index.less'
export default function PipeUpload() {
    const [loading, setLoading] = useState(false)
    const [imgBase64,setImgBase64]=useState('')
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const sliceFile = (file: any, piece = 1024 * 1024) => {
        let totalSize = file.size
        let start = 0
        let end = start + piece
        let chunks = []
        while (start < totalSize) {
            let blob = file.slice(start, end)
            chunks.push(blob)
            start = end
            end = start + piece
        }
        return chunks
    }
    return (
        <div className={styles.pipe_upload} >
            <Upload
                name='image'
                listType='picture-card'
                action='/bigfile/upload'
                withCredentials={false}
                customRequest={(options) => {
                    const { action, onSuccess, onError, file, onProgress } = options
                    let chunks = sliceFile(file)
                    let fileRead=new FileReader()
                    fileRead.readAsArrayBuffer(file)
                    fileRead.onload=(res)=>{
                        console.log(res,'fileREad')
                    }
                    
                    let chunksPromiseList = chunks.map((item, index) => {
                        return new Promise((resolve, reject) => {
                            let fd = new FormData()
                            fd.append('file', item)
                            fd.append('index', String(index))
                            uploadBigFile(fd).then(res => {
                                console.log(res)
                                resolve(res)
                            }).catch(err => {
                                console.log(err)
                                reject(err)
                            })
                        })
                    })
                    Promise.all(chunksPromiseList).then(resList => {
                        console.log(resList)
                        let pipeList = resList.filter((item: any) => item.code == 200).map((item2: any) => item2.data.path)
                        concatFile({pipeList}).then(res2=>{
                            if(res2.code==200){
                                setImgBase64(res2.data.imgBase64)
                                onSuccess({uid:''},file)
                            }
                        })
                    })
                }}
                onChange={(e) => {
                    console.log(e,'e')
                }}
                beforeUpload={() => {
                    return true
                }}
            >
                {uploadButton}
            </Upload>

            {imgBase64&&<img src={`data:image;base64, ${imgBase64}`} width='200px' alt=""/>}
        </div>
    )
}

