import React, { Component } from 'react';
import { Tabs, Card } from 'antd';
import { connect } from 'dva';
import { Page } from 'components';
import Tags from './components/tag';

const { TabPane } = Tabs;

// use 1 占用 2 可用 3 无法使用
const dataOne = [{
  room: '101',
  use: 1,
  content: '王富贵（男）占用，剩余一个床位',
  tag: '使用中',
  type: '房型: 双人间',
  price: '收费: 80/晚',
}, {
  room: '102',
  use: 2,
  content: '房间无人使用',
  tag: '可用',
  type: '房型: 四人间',
  price: '收费: 60/晚',
}, {
  room: '103',
  use: 3,
  content: '房间正在清扫，无法使用',
  tag: '无法使用',
  type: '房型: 单人间',
  price: '收费: 200/晚',
}, {
  room: '104',
  use: 1,
  content: '王全喜（男）占用，剩余三个床位',
  tag: '使用中',
  type: '房型: 四人间',
  price: '收费: 60/晚',
}];

const dataTwo = [{
  room: '201',
  use: 1,
  content: '王富贵（男）占用，剩余一个床位',
  tag: '使用中',
  type: '房型: 双人间',
  price: '收费: 80/晚',
}, {
  room: '202',
  use: 2,
  content: '房间无人使用',
  tag: '可用',
  type: '房型: 四人间',
  price: '收费: 60/晚',
}, {
  room: '203',
  use: 3,
  content: '房间正在清扫，无法使用',
  tag: '无法使用',
  type: '房型: 单人间',
  price: '收费: 200/晚',
}, {
  room: '204',
  use: 1,
  content: '王全喜（男）占用，剩余三个床位',
  tag: '使用中',
  type: '房型: 四人间',
  price: '收费: 60/晚',
}, {
  room: '205',
  use: 3,
  content: '设施故障',
  tag: '无法使用',
  type: '房型: 四人间',
  price: '收费: 70/晚',
}, {
  room: '206',
  use: 2,
  content: '房间无人使用',
  tag: '可用',
  type: '房型: 单人间',
  price: '收费: 200/晚',
}];

const dataThr = [{
  room: '101',
  use: 1,
  content: '王富贵（男）占用，剩余一个床位',
  tag: '使用中',
  type: '房型: 双人间',
  price: '收费: 80/晚',
}, {
  room: '102',
  use: 2,
  content: '房间无人使用',
  tag: '可用',
  type: '房型: 四人间',
  price: '收费: 60/晚',
}, {
  room: '103',
  use: 3,
  content: '房间正在清扫，无法使用',
  tag: '无法使用',
  type: '房型: 单人间',
  price: '收费: 200/晚',
}, {
  room: '104',
  use: 1,
  content: '王全喜（男）占用，剩余三个床位',
  tag: '使用中',
  type: '房型: 四人间',
  price: '收费: 60/晚',
}];

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Page inner>
        <Tabs defaultActiveKey="1">
          <TabPane tab="1号楼" key="1">
            { dataOne.map(item => (
              <Card
                title={item.room}
                extra={<Tags tag={item.tag} use={item.use} content={item.content}>{item.tag}</Tags>}
                style={{
                  width: 300, display: 'inline-block', marginLeft: 10, marginTop: 10,
                }}
              >
                <p>{item.type}</p>
                <p>{item.price}</p>
              </Card>
            ))}
          </TabPane>
          <TabPane tab="2号楼" key="2">
            { dataTwo.map(item => (
              <Card
                title={item.room}
                extra={<Tags tag={item.tag} use={item.use} content={item.content}>{item.tag}</Tags>}
                style={{
                  width: 300, display: 'inline-block', marginLeft: 10, marginTop: 10,
                }}
              >
                <p>{item.type}</p>
                <p>{item.price}</p>
              </Card>
            ))}
          </TabPane>
          <TabPane tab="3号楼" key="3">
            { dataThr.map(item => (
              <Card
                title={item.room}
                extra={<Tags tag={item.tag} use={item.use} content={item.content}>{item.tag}</Tags>}
                style={{
                  width: 300, display: 'inline-block', marginLeft: 10, marginTop: 10,
                }}
              >
                <p>{item.type}</p>
                <p>{item.price}</p>
              </Card>
            ))}
          </TabPane>
        </Tabs>
      </Page>
    );
  }
}

export default connect(({ loading }) => ({ loading }))(User);
