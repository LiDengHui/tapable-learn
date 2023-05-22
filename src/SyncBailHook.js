import { SyncBailHook } from "tapable";

const hook = new SyncBailHook(["arg1", "arg2"]);

hook.tap("Plugin1", (arg1, arg2) => {
  console.log("Plugin1", arg1, arg2);
});

hook.tap("Plugin2", (arg1, arg2) => {
  console.log("Plugin2", arg1, arg2);
  return "2";
});

hook.tap("Plugin3", (arg1, arg2) => {
  console.log("Plugin3", arg1, arg2);
});

const res = hook.call("Hello", "Tapable", );

console.log(res)
