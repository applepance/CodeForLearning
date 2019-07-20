function compose(middleware) {
  return function (context) {
    return dispatch(0);
    function dispatch(i) {
      const fn = middleware[i];
      return Promise.resolve(fn(context, () => {
        dispatch(i + 1);
      }));
    }
  }
}
module.exports = compose;