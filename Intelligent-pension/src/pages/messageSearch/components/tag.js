import React, { Component } from 'react';
import { Tag, Popover } from 'antd';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

    componentDidMount = () => {
      const { tag } = this.props;
      if (tag === '使用中') {
        this.setState({ color: '#f50' });
      } else if (tag === '可用') {
        this.setState({ color: '#87d068' });
      } else {
        this.setState({ color: '#2db7f5' });
      }
    }

    render() {
      const { tag, content } = this.props;
      const { color } = this.state;
      return (
        <Popover content={content}><Tag color={color}>{tag}</Tag></Popover>
      );
    }
}
