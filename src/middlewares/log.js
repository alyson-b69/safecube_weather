export default (dispatch) => (next) => (action) => {
  console.log(`ACTION EXECUTED : ${action.type}`, action);

  next(action);
};
