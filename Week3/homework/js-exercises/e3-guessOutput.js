// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

console.log(x());

// a = 12 is within the function and is returned within that scope.
// a=10 is a global variable is not called.
