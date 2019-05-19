/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'dva'
import {
  Modal, InputNumber, Radio, message, Input 
} from 'antd'

const { TextArea } = Input
const RadioGroup = Radio.Group

class EditModal extends React.PureComponent {
state = {
  payMoney: '',
  payType: 0,
  payRemark: '',
}

componentDidUpdate(prevProps) {
  if (this.props.visible && !prevProps.visible) {
    // eslint-disable-next-line react/no-did-update-set-state
    // this.setState({
    //   payType: 0,
    //   payMoney: this.props.data.payMoney,
    //   orderUri: this.props.data.uri,
    //   payRemark: '',
    // })
  }
}

handleOk = () => {
  const {
    payType, payMoney
  } = this.state
  if (payType === 0) {
    message.destroy()
    message.error('请选择支付方式')
  } else if (payMoney === '') {
    message.destroy()
    message.error('请输入金额')
  } else {
    this.pay()
  }
}

pay = () => {
  this.props.dispatch({
    type: 'user/pay',
    payload: {
      ...this.state,
      id: this.props.id,
    },
  }).then(() => {
    message.destroy()
    message.success('收款成功')
    this.handleCancel()
    this.props.fetchData()
  })
}

handleCancel = () => {
  this.setState({
    payMoney: '',
    payType: 0,
    payRemark: '',
  }, () => {
    this.props.handleCancel()
  })
}

onChange=value => (e) => {
  this.setState({
    [value]: value === 'payMoney' ? e : e.target.value,
  })
}

render() {
  const { visible } = this.props
  const { payType, payMoney, payRemark } = this.state
  return (
    <Modal
      title="结账"
      visible={visible}
      onCancel={this.handleCancel}
      onOk={this.handleOk}
      destroyOnClose
      width={600}
    >
      <div>
        <p>
        实收金额：
          <InputNumber
            size="small"
            onChange={this.onChange('payMoney')}
            value={payMoney}
            formatter={(value) => {
              const reg = /^(\-)*(\d+)\.(\d\d).*$/
              let result = 1
              if (typeof value === 'string') {
                result = !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : 0
              } else if (typeof value === 'number') {
                result = !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : 0
              }
              return result
            }}
            precision={2}
            min={0}
            style={{ marginRight: '20px', width: '80px' }}
          />
          元
        </p>
        <p>
          支付方式：
          <RadioGroup onChange={this.onChange('payType')} value={payType}>
            <>
              <Radio value={1}>现金</Radio>
              <Radio value={2}>微信</Radio>
              <Radio value={3}>支付宝</Radio>
              <Radio value={4}>银行卡</Radio>
            </>
          </RadioGroup>
        </p>
        <p style={{ display: 'flex' }}>
      备注：
          <span><TextArea rows={4} maxLength={200} style={{ width: 400 }} value={payRemark} onChange={this.onChange('payRemark')} /></span>
        </p>
      </div>
    </Modal>
  )
}
}
EditModal.propTypes = {
  dispatch: PropTypes.isRequired,
  visible: PropTypes.isRequired,
  data: PropTypes.isRequired,
  handleCancel: PropTypes.isRequired,
  fetchData: PropTypes.isRequired,
}

export default connect(({ loading }) => ({ loading }))(EditModal);
