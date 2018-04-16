import initState from '../initState';
import { user as TYPE} from '../Types';
// console.log(initState);
export default function reduxUser(state = initState.userState, action) {
  // console.log(state,action);
  switch (action.type) {
    case TYPE.USER_UPDATE:
      Object.assign(state, action.data);
      break;
    case TYPE.USER_ITEM:
      Object.assign(state, action.data);
      break;
    default:
      break;
  }
  return state;
}