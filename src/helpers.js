export let uniqueId = (function () {
  let num = 0;
  return function (prefix) {
    if (!prefix) return `${++num}`;
    return `${String(prefix)}-${++num}`;
  }
})();
