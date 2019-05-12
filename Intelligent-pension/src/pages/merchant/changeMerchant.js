import React,{Component} from 'react'
import { Page } from 'components'
import styles from './changeMerchant.less';
import {Form,Input,Button,Row,Col} from 'antd'
import { connect } from 'dva'
import router from 'umi/router'
import Link from 'umi/link'
const FormItem=Form.Item
class ChangeMerchant extends Component {
    constructor(props){
        super(props)
    }
 handleSubmit=()=>{
    const { getFieldsValue } = this.props.form
    const data=getFieldsValue()
    console.log(data)
}
changeMobileButton=()=>{
	router.push('/merchant/changepages/mobileFirst')
}
changeEmilButton=()=>{
	router.push('/merchant/changepages/emilFirst')
}
    render(){
        const { getFieldDecorator } = this.props.form
		const formItemLayout = {
			labelCol: {
				span: 8,
			},
			wrapperCol: {
				span: 8,
			},
        }
        const formItemLayouts = {
			labelCol: {
				span: 12,
			},
			wrapperCol: {
				span: 12,
			},
        }
        const {storeId,storeName,open,userName,mobile,emil,address}=this.props.merchant
    return (
        <Page inner>
        <div className={styles.content}>
            <Form>
            <FormItem label="商户ID"  {...formItemLayout}>
						{getFieldDecorator('storeId', {
                            initialValue:`${storeId}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input disabled/>)}
			</FormItem>
            <FormItem label="商户名称"  {...formItemLayout}>
						{getFieldDecorator('storeName', {
                            initialValue:`${storeName}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input/>)}
			</FormItem>
            <FormItem label="开通模块"  {...formItemLayout}>
						{getFieldDecorator('open', {
                            initialValue:`${open}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input disabled/>)}
			</FormItem>
            <FormItem label="联系人"  {...formItemLayout}>
						{getFieldDecorator('userName', {
                            initialValue:`${userName}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
                        })(<Input/>)}
			</FormItem>

            <div className={styles.mobile}>


            <FormItem label="手机号" {...formItemLayouts} >
						{getFieldDecorator('mobile', {
                            initialValue:`${mobile}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
                        })(<Input disabled/>)}
			</FormItem>
            </div>
            <div className={styles.changeButton}>
                <Button onClick={this.changeMobileButton}>更换</Button>
            </div>   
            <div className={styles.mobile}>
            <FormItem label="邮箱"  {...formItemLayouts}>
						{getFieldDecorator('emil', {
                            initialValue:`${emil}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input disabled/>)}
			</FormItem>
            </div>
            <div className={styles.changeButton}>
                <Button onClick={this.changeEmilButton}>更换</Button>
            </div>
            <FormItem label="地址"  {...formItemLayout}>
						{getFieldDecorator('address', {
                            initialValue:`${address}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input/>)}
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
export default connect(({merchant})=>({merchant}))(Form.create()(ChangeMerchant))