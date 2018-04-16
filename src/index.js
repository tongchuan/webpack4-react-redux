/*eslint-disable no-unused-vars*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import Loading from 'Root/components/loading';
/*eslint-enable no-unused-vars*/
// import { createBrowserHistory } from 'history'
import { createHashHistory } from 'history';
import 'antd/dist/antd.less';
import 'Root/less/main';
// import App from 'Root/pages/App';

import Index from 'Root/pages/Index';
import News from 'Root/pages/News';
import store from 'Root/redux/index';

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