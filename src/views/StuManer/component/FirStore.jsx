import { Table, Button, Skeleton, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { InfoList } from "../../../api/http";

export default function FirStore() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const init = async () => {
      const { data } = await InfoList()
      setdata(data)
      setloading(false)
    }
    init()
  }, [])
  const columns = [
    {
      title: '作者',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '内容文案',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '特色区域',
      key: 'address',
      dataIndex: "address",
    }, {
      title: '发布时间',
      key: 'date',
      dataIndex: "date",
    },
    {
      title: '操作',
      key: 'action',
      render: (data) => (
        <>
          <Space size='middle'>
            <Button type='text' size='small' onClick={(data) => { console.log('编辑', data) }}>编辑</Button>
            <Button type='text' size='small' danger onClick={(data) => { console.log('删除'); }}>删除</Button>
          </Space>
        </>
      )
    },
  ];
  return (
    <>
      <Skeleton loading={loading} active>
        <Table columns={columns} dataSource={data} rowKey='id' />
      </Skeleton>
    </>
  )
}


