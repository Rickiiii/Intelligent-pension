import React,{Component} from 'react'
import {Col,Row,Input,Button} from 'antd'
import styles from './index.less'
const Search = Input.Search;
class SearchDevice extends Component {
    constructor(props){
        super(props)
    }
    handleSearchDevice=(data)=>{
        console.log(data)
    }
    handleSearchTags=(data)=>{
        console.log(data)
    }
    render(){
        return(
            <div>
                <Row>
                    <Col span='3'> <span className={styles.headerMargin}>设备列表</span></Col>
                    <Col span='5' offset='8'><span className={styles.headerMargin}><span className={styles.text}>输入节点:</span>
                        <Search placeholder="节点名称" onSearch={value => this.handleSearchTags(value)}
                        style={{ width: 185 }}
                        />
                    </span></Col>
                    <Col span='5'><span className={styles.headerMargin}> 
                    <span className={styles.text}>
                    设备类型:</span>
                        <Search placeholder="设备类型" onSearch={value => this.handleSearchDevice(value)}
                       style={{ width: 185 }}
                        />
                    </span></Col>
                    <Col span='3'>
                    <span className={styles.headerMargin}>
                    <Button>添加新设备</Button>
                    </span>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default SearchDevice