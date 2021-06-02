import React, { Component, Fragment } from 'react'
import { Table } from 'antd'

function TableRow({ columns }) {
    return (
        <Fragment>
            {
                columns.map(column => <Table.Column title={column.title} key={column.key} dataIndex={column.dataIndex} ></Table.Column>)
            }
        </Fragment>
    )
}

export default class index extends Component {
    constructor(props) {
        super(props)
        this.tableRef = React.createRef()
    }
    state = {
        columns: [
            {
                title: '姓名',
                key: 'name',
                dataIndex: 'name',
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age',
            },
            {
                title: '学历',
                key: 'gender',
                dataIndex: 'gender',
            },
            {
                title: '公司',
                key: 'company',
                dataIndex: 'company',
            }
        ],
        dataSource: [
            {
                key: '1',
                name: 'zzj',
                age: 18,
                gender: '家里',
                company: '51'
            },
            {
                key: '2',
                name: <div>'zze到拉萨加夫里什觉得浪费就啊谁来的减肥拉萨江东父老就啊收到了福建省啦大家flashed浪费就撒了点肥家啦三等奖肥了就打死了肌肤j',</div>,
                age: 18,
                gender: '家里',
                company: '51'
            }
        ]
    }
    componentDidMount() {

    }
    render() {
        const { columns, dataSource } = this.state
        return (
            <div>
                <Table columns={columns} dataSource={dataSource} >
                    
                </Table>
            </div>
        )
    }
}

