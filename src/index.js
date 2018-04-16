/*eslint-disable no-unused-vars*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import Loading from 'Root/components/loading';
import Bundle from './Bundle';
/*eslint-enable no-unused-vars*/
// import { createBrowserHistory } from 'history'
import { createHashHistory } from 'history';
import store from 'Root/redux/index';
import Index from 'Root/pages/Index';
import 'antd/dist/antd.less';
import 'Root/less/main';
// import App from 'Root/pages/App';

import NewsContainer from 'bundle-loader?lazy&name=lazy/lazy-[name]!Root/pages/News';
import UserContainer from 'bundle-loader?lazy&name=lazy/lazy-[name]!Root/pages/User';
/*eslint-disable no-unused-vars*/
const News             = (props) => (<Bundle load={NewsContainer}             {...props}>{ (Page) => <Page {...props} />}</Bundle>);
const User             = (props) => (<Bundle load={UserContainer}             {...props}>{ (Page) => <Page {...props} />}</Bundle>);
/*eslint-enable no-unused-vars*/

// let history = createBrowserHistory(BrowserRouter,store)
let history = createHashHistory(store);
// console.log(history)
ReactDOM.render(
  [
    <Loading key='0' store={store} />,
    <Provider key='1' store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/news" exact component={News}/>
          <Route path="/user" exact component={User}/>
        </Switch>
      </Router>
    </Provider>
  ],
  document.getElementById('root')
);

// ReactDOM.render(
//   <Provider  store={store}>
//     <Router history={history}>
//       <Switch>
//         <Route path="" exact component={Index}/>
//         <Route path="/news" exact component={News}/>
//       </Switch>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );