import {AsyncParallelBailHook} from "tapable";

const hook = new AsyncParallelBailHook(["args1", "args2"]);

hook.tapAsync("Plugin1", (arg1, arg2, callback) => {
    setTimeout(() => {
        console.log("Plugin1:", arg1, arg2);
        callback("Plugin1");
    }, 1000);
});

hook.tapAsync("Plugin2", (arg1, arg2, callback) => {
    setTimeout(() => {
        console.log("Plugin2:", arg1, arg2);
        callback("Plugin2");
    }, 1500);
});

hook.callAsync("Hello", "Tapable", (result) => {
    console.log("All Plugins executed", result);
});

