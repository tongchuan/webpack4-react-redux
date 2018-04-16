import DB from 'Root/api/userApi';
// import commonActions from './commonActions';
import {user as userTypes } from '../Types';
export default{
  updateUser(data) {
    // return (dispatch, state) => {
    return (dispatch) => {
      dispatch({
        type: userTypes.USER_UPDATE,
        data
      });
    };
  },
  addTodo2(data) {
    return (dispatch) => {
      DB.getNewsList(data).then(function(data) {
        console.log(data);
        dispatch({
          type: 'value',
          data
        });
      },function(err) {
        console.log(err);
        dispatch({
          type: 'err',
          err
        });
      });
    };
  }
};