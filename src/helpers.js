export let uniqueId = function () {
  let num = 0;
  return function (prefix) {
    return `${String(prefix || '')}-${++num}`;
  }
};
