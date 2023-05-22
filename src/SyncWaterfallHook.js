import { SyncWaterfallHook } from "tapable";

const hook = new SyncWaterfallHook(["arg1", "arg2"]);

hook.tap("Plugin1", (arg1, arg2) => {
  console.log("Plugin1", arg1, arg2);
  return "return Plugin1";
});

hook.tap("Plugin2", (arg1, arg2) => {
  console.log("Plugin2", arg1, arg2);
  return "return Plugin2";
});

hook.tap("Plugin3", (arg1, arg2) => {
  console.log("Plugin3", arg1, arg2);
  return "return Plugin3";
});

const res = hook.call("Hello", "Tapable");

console.log(res);
