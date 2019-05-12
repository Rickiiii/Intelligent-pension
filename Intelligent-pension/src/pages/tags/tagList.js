import React,{Component} from 'react'
import { Page } from 'components'
import { Tree,Row,Col,Button,message,Modal } from 'antd';
import TagsList from '../../components/tags/tagsList';
import styles from './index.less'
import TagsInfo from '../../components/tags/tagsInfo';
import router from 'umi/router'

const treeData = [{
    title: '中国',
    key: '中国',
    children: [{title:'北京市',key:'北京市'},
    {title:'上海市',key:'上海市'},
    {title:'天津市',key:'天津市'},
    {title:'重庆市',key:'重庆市'},
    {
      title: '安徽省',
      key: '安徽省',
      children: [
        { title: '合肥市', key: '合肥市' },
        { title: '芜湖市', key: '芜湖市' },
        { title: '蚌埠市', key: '蚌埠市' },
        { title: '黄山市', key: '黄山市' },
        { title: '滁州市', key: '滁州市' },
      ],
    }, {
      title: '广东省',
      key: '广东省',
      children: [
        { title: '广州市', key: '广州市' },
        { title: '深圳市', key: '深圳市' },
        { title: '汕头市', key: '汕头市' },
        { title: '东莞市', key: '东莞市' },
        { title: '珠海市', key: '珠海市' },
      ],
    }]
  }];
  
class TagList extends Component {
   constructor(props){
       super(props)
       this.state={
        tagName:'',
        visible: false
       }
   }
   addUser=()=>{
       router.push('/tags/addTag')
   }
   hangleClick=(selectedKeys, info)=>{
    console.log('onSelect', selectedKeys);
    this.setState({
        tagName:selectedKeys
    })
   }
   handleEditTag=()=>{
    const {tagName}=this.state
    if(tagName==''){
        message.error('选择要编辑的节点')
    }else{
       router.push({
           pathname:'/tags/editTag',
        query:{
            tagName:tagName
        }})
    }
   }
   //删除的弹框
   showModal = () => {
    const {tagName}=this.state
    if(tagName==''){
        message.error('选择要删除的节点')
    }else{
    this.setState({
      visible: true,
    });
    }
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
    render(){
        const {tagName}=this.state
    return (
        <Page inner>
        <div>
        <div className={styles.header}>
            <Row>
                <Col span={3} offset={1}><span className={styles.title}>节点列表</span></Col>
                <Col span={2} offset={17}><div><Button onClick={this.addUser}>创建节点</Button></div></Col>
            </Row>
        </div>
        <div className={styles.content}>
            <div className={styles.Bbox}>
                <TagsList treeData={treeData} onClicked={this.hangleClick}/>
            </div>
            <div className={styles.rightBox}>
            <div className={styles.boxHeader}>
                <Row>
                    <Col span={4}>
                        <Button onClick={this.handleEditTag}>修改</Button>
                    </Col>
                    <Col span={4} offset={6}>
                        <span className={styles.text}>节点详情</span>
                        </Col>
                    <Col span={4} offset={6}>
                        <Button onClick={this.showModal}>删除</Button>
                    </Col>
                </Row>
            </div>
            <div className={styles.info}>
                <TagsInfo tagName={tagName}/>
            </div>

            </div>
            <Modal
                title="删除节点"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText="确定"
                cancelText="取消"
            >
                <h2>确认删除该节点？</h2>
        
            </Modal>
        </div>
        </div>
        </Page>
    )
}
}
export default TagList