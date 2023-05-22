import {AsyncSeriesWaterfallHook} from "tapable";

const hook = new AsyncSeriesWaterfallHook(["arg1", "arg2"]);

hook.tapPromise("Plugin1", (arg1, arg2) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Plugin1", arg1, arg2);

            resolve("-Result: Plugin1");
        }, 1000);
    });
});

hook.tapPromise("Plugin2", (arg1, arg2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Plugin2", arg1, arg2);
            resolve("-Result: Plugin2")
            // reject(new Error("Plugin2 failed"));
        }, 500);
    });
});

hook.promise("Hello", "Tapable").then(res => {
    console.log("all Plugin1", res) //  无返回值
}).catch((error) => {
    console.error(error.message);
});
