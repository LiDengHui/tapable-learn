import { SyncLoopHook } from "tapable";

const hook = new SyncLoopHook(["name", "age"]);
let total1 = 0;

let total2 = 0;

hook.tap("Plugin1", (name, age) => {
  console.log("Plugin1", name, age, total1);
  return total1++ < 2 ? true : undefined;
});

hook.tap("Plugin2", (name, age) => {
  console.log("Plugin2", name, age, total2);
  return total2++ < 2 ? true : undefined;
});

hook.tap("Plugin3", (name, age) => {
  console.log("Plugin3", name, age);
});

hook.call("Hello", 18);

