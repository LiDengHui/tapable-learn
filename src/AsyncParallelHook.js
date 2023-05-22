import { AsyncParallelHook } from "tapable";

const hook = new AsyncParallelHook(["args1", "args2"]);
//
hook.tapAsync("Plugin1", (arg1, arg2, callback) => {
  setTimeout(() => {
    console.log("Plugin1:", arg1, arg2);
    callback();
  }, 1000);
});
hook.tapAsync("Plugin2", (arg1, arg2, callback) => {
  setTimeout(() => {
    console.log("Plugin2:", arg1, arg2);
    callback();
  }, 500);
});
//
hook.callAsync("Hello", "Tapable", () => {
  console.log("All Plugins executed");
});

// hook.tapPromise("Plugin1", (arg1, arg2) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(1, arg1, arg2, new Date());
//       resolve();
//     }, 3000);
//   });
// });
// hook.tapPromise("Plugin2", (arg1, arg2) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(2, arg1, arg2, new Date());
//       resolve();
//     }, 2000);
//   });
// });
//
// hook.tapPromise("Plugin3", (arg1, arg2) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(3, arg1, arg2, new Date());
//       resolve();
//     }, 1000);
//   });
// });
// hook.callAsync("Hello", "Tapable", () => {
//   console.log("All Plugins executed");
// });
