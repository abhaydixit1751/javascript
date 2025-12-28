// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     a = 100;
//     y();
//     // return y;
//   }
//   x();
// }

// z();

function x() {
  var i = 1;
  for (var i = 1; i < 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }

  console.log("hello world");
}
x();
