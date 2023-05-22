import {AsyncSeriesLoopHook} from "tapable";

const hook = new AsyncSeriesLoopHook(["arg1", "arg2"]);

let total1 = 0;

let total2 = 0;

hook.tapPromise("Plugin1", (arg1, arg2) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Plugin1", arg1, arg2);

            resolve(total1++ < 2 ? true : undefined);
        }, 1000);
    });
});

hook.tapPromise("Plugin2", (arg1, arg2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Plugin2", arg1, arg2);
            resolve(total2++ < 2 ? true : undefined);
            // reject(new Error("Plugin2 failed"));
        }, 500);
    });
});


hook.tapPromise("Plugin3", (arg1, arg2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Plugin3", arg1, arg2);
            resolve();
            // reject(new Error("Plugin2 failed"));
        }, 500);
    });
});

hook.promise("Hello", "Tapable").then(res => {
    console.log("all Plugin1", res) //  无返回值
}).catch((error) => {
    console.error(error.message);
});
