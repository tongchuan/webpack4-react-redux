import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import newsActions from 'Root/redux/actions/newsActions';
/*eslint-disable no-unused-vars*/
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
/*eslint-enable no-unused-vars*/

/** 可用 eslint 检查不过@操作符（修饰符）
  @connect((state, ownProps)=>{
    return { newState: state.newState };
  },(dispatch) => {
    return {action: bindActionCreators(newsActions, dispatch)};
  },(stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
  }, {
    pure: false,
    withRef: false
  })
  export default class News extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this.props.action.addTodo();
    }
    render() {
      console.log(this);
      return (
        <div>news {this.props.newState.g}===={this.props.newState.age}</div>
      );
    }
  }
 */
class News extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdateNewsList = this.onUpdateNewsList.bind(this);
  }
  componentDidMount() {
    // this.props.action.addTodo();
    // console.log(this);
  }
  onUpdateNewsList() {
    let random = Math.random();
    this.props.newsAction.updateRandom(random);
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight:'64px'}}
          >
            {this.props.menuState.menu.map((item) => (<Menu.Item key={item.key}><Link to={item.action}>{item.name}</Link></Menu.Item>))}
          </Menu>
        </Header>
        <h2>news List</h2>
        <div>
          <ul>
            {this.props.newState.list.map((item, index) => {
              return (
                <li key={index}>{item.id}、{item.title}[{item.random}]</li>
              );
            })}
          </ul>
          <ul>
            <li>
              <Button onClick={this.onUpdateNewsList} type="primary">更新数据添加随机数</Button>
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default connect((state) => {
  return { newState: state.newState, menuState: state.menuState };
},(dispatch) => {
  return {newsAction: bindActionCreators(newsActions, dispatch)};
},(stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}, {
  pure: false,
  withRef: false
})(News);