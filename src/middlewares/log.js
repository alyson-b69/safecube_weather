const Log = (dispatch) => (next) => (action) => {
  console.log(`ACTION EXECUTED : ${action.type}`, action);
  next(action);
};

export default Log;
