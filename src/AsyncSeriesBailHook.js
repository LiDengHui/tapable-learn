import {AsyncSeriesBailHook} from "tapable";

const hook = new AsyncSeriesBailHook(["arg1", "arg2"]);

hook.tapPromise("Plugin1", (arg1, arg2) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Plugin1", arg1, arg2);
            resolve();
        }, 1000);
    });
});

hook.tapPromise("Plugin2", (arg1, arg2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Plugin2", arg1, arg2);

            reject(new Error("Plugin2 failed"));
        }, 500);
    });
});

hook.promise("Hello", "Tapable").then(res => {
    console.log("all Plugin1", res)
}).catch((error) => {
    console.error(error.message);
});
