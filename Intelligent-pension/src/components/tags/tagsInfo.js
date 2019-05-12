import React,{Component} from 'react'
import { Page } from 'components'
import {Form,Input,Button,Select} from 'antd'
const FormItem=Form.Item
const { TextArea } = Input;
const Option = Select.Option;
class TagsInfo extends Component {
   constructor(props){
       super(props)
       this.state={
        parentTag:'',
        tagsType:'',
        userName:'',
        mobile:'',
        desc:'',
       }
   }
    render(){
        const { getFieldDecorator } = this.props.form
        const {tagName}=this.props
        const {parentTag,tagsType,userName,mobile,desc}=this.state
		const formItemLayout = {
			labelCol: {
				span: 8,
			},
			wrapperCol: {
				span: 8,
			},
        }
    return (
        <div>
            <Form>
            <FormItem label="节点名称"  {...formItemLayout}>
						{getFieldDecorator('tagName', {
							initialValue:`${tagName}`
						})(<Input/>)}
			</FormItem>
            <FormItem label="父级节点"  {...formItemLayout}>
						{getFieldDecorator('parentTag', {
                            initialValue:`${parentTag}`
						})(<Input/>)}
			</FormItem>
            <FormItem label="节点类型"  {...formItemLayout}>
						{getFieldDecorator('tagsType', {
                            initialValue:`${tagsType}`
						})(<Input/>)}
			</FormItem>
            <FormItem label="联系人"  {...formItemLayout}>
						{getFieldDecorator('userName', {
                            initialValue:`${userName}`
						})(<Input/>)}
			</FormItem>
            <FormItem label="联系电话"  {...formItemLayout}>
						{getFieldDecorator('mobile', {
                            initialValue:`${mobile}`
                        })(<Input/>)}
			</FormItem>
            <FormItem label="备注"  {...formItemLayout}>
						{getFieldDecorator('desc', {
                            initialValue:`${desc}`,
						})(<TextArea rows={4}/>)}
			</FormItem>
            </Form>
        </div>
    )
}
}
export default Form.create()(TagsInfo) 