const p1 = new Promise((res, rej) => {
  setTimeout(() => rej("failure"), 1000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => rej("failure"), 1000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => rej("failure"), 1000);
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err.errors));
console.log(this);
