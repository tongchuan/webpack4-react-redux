import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import userActions from 'Root/redux/actions/userActions';
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
class User extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  componentDidMount() {
    // this.props.action.addTodo();
    // console.log(this);
  }
  onUpdateUser() {
    let data = {
      name: 'name'+Math.random(),
      age: 'age'+Math.random(),
      email: 'email'+Math.random(),
    };
    this.props.userAction.updateUser(data);
    // this.props.newsAction.updateRandom(random);
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['3']}
            style={{lineHeight:'64px'}}
          >
            {this.props.menuState.menu.map((item) => (<Menu.Item key={item.key}><Link to={item.action}>{item.name}</Link></Menu.Item>))}
          </Menu>
        </Header>
        <h2>User Item</h2>
        <div>
          <ul>
            <li>姓名：{this.props.userState.name}</li>
            <li>年龄：{this.props.userState.age}</li>
            <li>邮箱：{this.props.userState.email}</li>
          </ul>
          <ul>
            <li>
              <Button onClick={this.onUpdateUser} type="primary">更新数据添加随机数</Button>
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default connect((state) => {
  return { userState: state.userState, menuState: state.menuState };
},(dispatch) => {
  return {userAction: bindActionCreators(userActions, dispatch)};
},(stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}, {
  pure: false,
  withRef: false
})(User);