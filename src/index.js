// 同步
// import "./SyncHook" // 同步钩子
// import "./SyncBailHook"; // 同步早退钩子
// import "./SyncWaterfallHook"; // 同步瀑布钩子
// import "./SyncLoopHook"; //同步循环钩子

// 异步并发
// import "./AsyncParallelHook"; // 异步并发钩子
// import "./AsyncParallelBailHook"; // 异步并发可早退钩子


// 异步串行
// import "./AsyncSeriesHook"; // 异步串行钩子
// import "./AsyncSeriesBailHook"; //异步串行可早退钩子， 接受的参数是 call本身触发的参数
// import "./AsyncSeriesWaterfallHook" // 异步顺序瀑布钩子， 接收的参数是上一个监听返回的结果
import "./AsyncSeriesLoopHook" // 异步顺序循环钩子
