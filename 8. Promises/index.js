// const card = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// const promise = createOrder(cart);
//{data: undefined}
// after the async function completes its operation, it fills this object
//{data: orderDetails}

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// const GITHUB_API = "https://api.github.com/users/adixit7386";
// const user = fetch(GITHUB_API);
// user.then((data) => console.log(data)).catch((error) => console.log(error));
// console.log(user);

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function () {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });
// //solution
// createOrder(cart)
//   .then(function () {
//     return proceedToPayment(orderId);
//   })
//   .then(function () {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     return updateWalletBalance(paymentInfo);
//   });

// createOrder(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .then((paymentInfo) => updateWalletBalance(paymentInfo));

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); //orderId

promise
  .then(function (orderId) {
    console.log(orderId);
    //   proceedToPayment(orderId);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch((err) => console.log(err.message))
  .then((err) =>
    console.log("No matter what happens, I will definitely be called")
  );

//Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create order
    //validate cart
    //orderId is required
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      return reject(err);
    }
    //logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
      //   resolve(orderId);
    }
  });
  return pr;
}
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}
function validateCart(cart) {
  return true;
}
