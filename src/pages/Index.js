import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/*eslint-disable no-unused-vars*/
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
import IconPage from './IconPage';
import ButtonPage from './ButtonPage';
/*eslint-enable no-unused-vars*/


import newsActions from 'Root/redux/actions/newsActions';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      page: 'IconPage',
      
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  onCollapse(collapsed) {
    this.setState({ collapsed });
  }
  onMenuClick(item) {
    this.setState({page: item.page});
  }
  // componentDidMount() {
  //   console.log(this.props)
  // }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{lineHeight:'64px'}}
          >
            {this.props.menuState.menu.map((item) => (<Menu.Item key={item.key}><Link to={item.action}>{item.name}</Link></Menu.Item>))}
          </Menu>
        </Header>
        <Layout>
          <Sider 
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width={200} style={{background:'#fff'}}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {this.props.menuState.subMenu.map((menu) => {
                return (
                  <SubMenu key={menu.key} title={<span><Icon type={menu.type} /><span>{menu.title}</span></span>}>
                    {menu.list.map((item) => {
                      return (<Menu.Item key={item.key}><span onClick={this.onMenuClick.bind(this,item)} >{item.name}</span></Menu.Item>);
                    })}
                  </SubMenu>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {this.state.page==='IconPage' && (<IconPage />)}
              {this.state.page==='ButtonPage' && (<ButtonPage />)}
              
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect((state) => {
  // console.log(state, ownProps)
  return { newState: state.newState, menuState: state.menuState };
},(dispatch) => {
  // console.log(dispatch,ownProps)
  return {action: bindActionCreators(newsActions, dispatch)};
},(stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}, {
  pure: false,
  withRef: false
})(Index);