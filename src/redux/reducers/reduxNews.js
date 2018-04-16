import initState from '../initState';
export default function reduxNews(state = initState.newState, action) {
  switch (action.type) {
    case 'value':
      // console.log(action)
      Object.assign(state, action.data);
      break;
    case 'err':
      Object.assign(state, action.data);
      break;
    default:
      break;
  }
  // console.log(state)
  return state;
}