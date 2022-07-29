import React from 'react'
import { Button } from 'antd'

export default function layout() {
    return (
        <div>
            layout
            <Button type='primary' onClick={() => {
                alert('缓存清除成功！')
            }}>清除缓存</Button>

        </div>
    )
}
