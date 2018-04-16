import newsApi from 'Root/api/newsApi';
import commonActions from './commonActions';
export default{
  addTodo(data) {
    // return (dispatch, state) => {
    return (dispatch) => {
      commonActions.loadingShow(dispatch);
      // console.log(state)
      // newsApi.getNewsList(data,dispatch).then(function(data) {
      newsApi.getNewsTest(data).then(function(data) {
        commonActions.loadingHide(dispatch);
        console.log(data);
        dispatch({
          type: 'value',
          data
        });
      },function(err) {
        commonActions.loadingHide(dispatch);
        console.log(err);
        dispatch({
          type: 'err',
          err
        });
      });
    };
  },
  addTodo2(data) {
    return (dispatch) => {
      newsApi.getNewsList(data).then(function(data) {
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