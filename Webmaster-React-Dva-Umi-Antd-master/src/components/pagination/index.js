import React from 'react'
import {Pagination} from 'antd'
import styles from './index.less'

const Paginations =({total,onPageChange, onSizeChange })=>{
    const onShowPageChange= (current, pageSize)=> {
        onPageChange(current, pageSize)
    }
   const onShowSizeChange=(current, pageSize)=> {
        onSizeChange(current, pageSize)
    }
    return (
        <div className={styles.content}>
        <Pagination
        showTotal={total => `查询结果 ${total} 条`}
        showSizeChanger
        onChange={onShowPageChange}
        onShowSizeChange={onShowSizeChange}
        total={total}
        />
        </div>
    )

}
export default Paginations