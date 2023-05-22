import {SyncHook} from "tapable";

const hook = new SyncHook(["arg1", "arg2"]);

hook.tap("Plugin1", (arg1, arg2) => {
    console.log("Plugin1", arg1, arg2)
})

hook.tap("Plugin2", (arg1, arg2) => {
    console.log("Plugin2", arg1, arg2)
})

hook.call("Hello", "Tapable")

console.log("all Plugin")
