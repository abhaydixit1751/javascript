/**
 * What is async?
 * What is await?
 * How async await works behind the scenes?
 * Examples of using async/await?
 * Error handling
 * Interviews
 * Async await vs Promise.then/.catch
 *
 */

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 10000);
});
const q = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 10000);
});

async function handlePromise() {
  //js engine was waiting for the promise to be resolved.
  const val = await p;
  console.log("namaste javascript");
  console.log(val);

  const val2 = await q;
  console.log("namaste javascript 2");
  console.log(val2);
}

handlePromise();
//empty
//callstack
//async p1, p2, p3, p4

//handlepromise comes under call stack
//starts executing line by line

// sees await p1
// there are two cases wait or go
//handle promise moves out of call stack
//after five seconds the handlepromise comes again inside call stack

// see await p2
// moves out of call stack
// waits for 10 seconds

//always returns a promise
// async function getData() {
//   // js engine will not wait for promise to be resolved
//   p.then((res) => console.log(res));

//   console.log("namaste javascript");
// }

// const data = getData();
// console.log(data);

async function handlePromise() {
  const val = await new Promise((res) =>
    setTimeout(() => res("P done"), 10000)
  );
  console.log(val);

  const val2 = await new Promise((res) =>
    setTimeout(() => res("Q done"), 10000)
  );
  console.log(val2);
}

const createPromise = () =>
  new Promise((res) => setTimeout(() => res("done"), 10000));

async function handlePromise() {
  const val = await createPromise();
  console.log(val);

  const val2 = await createPromise();
  console.log(val2);
}
