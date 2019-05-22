import React from 'react'
import styles from './info.less'
const Info =({data})=>{
    return(
        <div className={styles.table}>
            <table border='1'>
            <tbody>
                <tr>
                    <th rowSpan="4">
                    <div>
                        <div className={styles.imgs}>
                        <img src="./../../../public/logo.svg" alt="" width="80" height="80"/>
                        </div>
                       <div className={styles.text}>{data.storeId}</div>
                    </div>
                    </th>
                    <th>商户ID</th>
                    <td>{data.storeId}</td>
                    <th>联系人</th>
                    <td>{data.userName}</td>
                </tr>
                <tr>
                    <th>商户名称</th>
                    <td>{data.storeName}</td>
                    <th>手机号</th>
                    <td>{data.mobile}</td>
                </tr>
                <tr>
                <th>商户状态</th>
                    <td>{data.storeStatus}</td>
                    <th>邮箱</th>
                    <td>{data.emil}</td>
                </tr>
                <tr>
                <th>开通模板</th>
                    <td>{data.open}</td>
                    <th>地址</th>
                    <td>{data.address}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Info