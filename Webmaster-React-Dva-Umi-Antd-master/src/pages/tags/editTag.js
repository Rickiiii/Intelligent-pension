import React,{Component} from 'react'
import { Page } from 'components'
import { connect } from 'dva'
import {Form,Input,Button,Select,Col,Checkbox} from 'antd'
import styles from './index.less'
import router from 'umi/router'
const FormItem=Form.Item
const Option = Select.Option;
const options = [
   '管理', '巡店', '客流', 
  ];
const { TextArea } = Input;
class EditTag extends Component {
    constructor(props){
        super(props)
        this.state={
            tagName: this.props.location.query.tagName
		}
    }
    handleSubmit=()=>{
        const { getFieldsValue } = this.props.form
        const data=getFieldsValue()
        console.log(data)
    }
    handleBack=()=>{
        router.goBack();
    }
    render(){
        const info=
		{parentTag:'安徽省',tagsType:'区域',userName:'亦',mobile:'12345678996',desc:'无'}
        const { getFieldDecorator } = this.props.form
        const {tagName}=this.state
		const formItemLayout = {
			labelCol: {
				span: 8,
			},
			wrapperCol: {
				span: 8,
			},
        }
    return (
        <Page inner>
       <div className={styles.contents}>
       <div className={styles.back}>
                <Button onClick={this.handleBack}>返回</Button>

            </div>
            <Form>
            <FormItem label="节点名称"  {...formItemLayout}>
						{getFieldDecorator('tagName', {
                            initialValue:`${tagName}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input placeholder="请输入节点名称"/>)}
			</FormItem>
            <FormItem label="父级节点"  {...formItemLayout}>
						{getFieldDecorator('parentTag', {
                            initialValue:`${info.parentTag}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})( <Select>
                        <Option value="0">请选择</Option>
                        <Option value="中国">中国</Option>
                        <Option value="北京市">北京市</Option>
                        <Option value="天津市">天津市</Option>
                        <Option value="上海市">上海市</Option>
                        <Option value="重庆市">重庆市</Option>
                        <Option value="安徽省">安徽省</Option>
                        <Option value="广东省">广东省</Option>
                      </Select>)}
			</FormItem>
            <FormItem label="节点类型"  {...formItemLayout}>
						{getFieldDecorator('tagsType', {
                             initialValue:`${info.tagsType}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})( <Select >
                        <Option value="0">请选择</Option>
                        <Option value="区域">区域</Option>
                        <Option value="门店">门店</Option>
                        <Option value="出入口">出入口</Option>
                      </Select>)}
			</FormItem>
            <FormItem label="联系人"  {...formItemLayout}>
						{getFieldDecorator('userName', {
                            initialValue:`${info.userName}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input placeholder="请输入联系人姓名"/>)}
			</FormItem>
            <FormItem label="联系电话"  {...formItemLayout}>
						{getFieldDecorator('mobile', {
                             initialValue:`${info.mobile}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
                        })(<Input placeholder="请输入联系电话"/>)}
			</FormItem>
            <FormItem label="备注"  {...formItemLayout}>
						{getFieldDecorator('desc', {
                             initialValue:`${info.desc}`,
							rules: [
								{
									
								},
							],
						})(<TextArea rows={4} placeholder="有什么需要备注的吗"/>)}
			</FormItem>
            </Form>
            <div className={styles.submits}>
                <Button type="primary" onClick={this.handleSubmit}>提交</Button>

            </div>
        </div>
        </Page>
    )
}
}
export default Form.create()(EditTag)