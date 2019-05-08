import React,{Component} from 'react'
import { Page } from 'components'
import { Tree } from 'antd';
import styles from './index.less'
const TreeNode = Tree.TreeNode;
class TagsList extends Component {
    state = {
        expandedKeys: ['中国'],
        autoExpandParent: true,
        selectedKeys: [],
      }
      onExpand = (expandedKeys) => {
        console.log('onExpand', expandedKeys);
       
        this.setState({
          expandedKeys,
          autoExpandParent: false,
        });
      }
      onSelect = (selectedKeys, info) => {
          const {onClicked}=this.props
          onClicked(selectedKeys, info)
        this.setState({ selectedKeys });
      }
    
      renderTreeNodes = (data) => {
        return data.map((item) => {
          if (item.children) {
            return (
              <TreeNode title={item.title} key={item.key} dataRef={item}>
                {this.renderTreeNodes(item.children)}
              </TreeNode>
            );
          }
          return <TreeNode {...item} />;
        });
      }
    
    render(){
        const {treeData}=this.props
    return (
        <Page inner>
        <div className={styles.box}><Tree
        onExpand={this.onExpand}
        checkedKeys={this.state.checkedKeys}
        defaultExpandAll={true}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {this.renderTreeNodes(treeData)}
      </Tree></div>
        </Page>
    )
}
}
export default TagsList