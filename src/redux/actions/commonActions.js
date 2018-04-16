// import newsApi from 'Root/api/newsApi';
import { common as TYPE} from '../Types';
export default{
  loadingShow(dispatch) {
    dispatch({
      type: TYPE.LOADING_SHOW
    });
  },
  loadingHide(dispatch) {
    dispatch({
      type: TYPE.LOADING_HIDE
    });
  }
};