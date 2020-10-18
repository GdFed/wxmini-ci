export default {
  debounce(fn, wait, pre) {
    let timeout = null;
    return function () {
      let args = arguments;
        if (pre) {
          if (!timeout) {
            fn.apply(this, args);
          }
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            timeout = null;
          }, wait);
        } else {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            fn.apply(this, args);
          }, wait);
        }
    };
  },
  isIphoneX() {
    const {
      model
    } = my.getSystemInfoSync();
    console.log(my.getSystemInfoSync());
    return model.search('iPhone X') !== -1 || model.search('iPhone12') !== -1;
  },
  formatStore(store){
    if (!store) return ''
    if (store.split('（').length>1) {
      let arr = store.split('（')
      arr = arr[1].split('）')
      store = arr[0]
    }
    if (store.split('(').length>1) {
      let arr = store.split('(')
      arr = arr[1].split(')')
      store = arr[0]
    }
    return store
  },
  /**
   * 
   * @param {number}} distance 米
   */
  formatDistance(distance){
    if (!distance) return '0m'
    if (distance.indexOf('m')!==-1) return distance
    if (isNaN(distance)) return '0m'
    if (distance < 1000) return distance + 'm'
    if (distance >= 1000) return (distance / 1000).toFixed(2) + 'km'
  },
}