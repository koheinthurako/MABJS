// GEC & FEC
// const a = 5;
// const b = "hein";
 
// const af = () => {
//     const x = 10;
//     const y = 20;
//     const z = x + y;
//     return "this is af " + z;
// };

// function fs() {
//     const j = "jjj";
//     const k = "kkk";
//     return "this is fs " + j + k;
// }

// af();
// fs();




// sync & async
// function sync() {
//     console.log("a");    
//     for(let i = 1; i<=10; i++) {
//         console.log(i, "b");
//     }
//     console.log("b");    
//     console.log("c");    
// }

// sync();

// function async() {
//     fetch('https://dummyjson.com/products/1')
//     .then(res => res.json())
//     .then(console.log);

//     fetch('https://dummyjson.com/products/2')
//     .then(res => res.json())
//     .then(console.log);

//     fetch('https://dummyjson.com/products/3')
//     .then(res => res.json())
//     .then(console.log);

//     fetch('https://dummyjson.com/products/4')
//     .then(res => res.json())
//     .then(console.log);

//     fetch('https://dummyjson.com/products/5')
//     .then(res => res.json())
//     .then(console.log);
// }

// async();

// console.log("this is end");




// Callstack, WebAPI, Queue, Queue, Event loop
// JS က single-threaded language ဖြစ်လို့ callstack တစ်ခုပဲပါတယ် Callstack မအားဘူးဆိုရင် Queue ထဲက အလုပ်တွေအကုန် Callstack အားအောင်စောင့်ရတယ်
// function run() {
//     console.log("a");

//     setTimeout(() => {
//         console.log("b");
//     }, 1);

//     let z = 0;
//     for(let i = 1; i <= 100000; i++) {
//         z += i;
//     }

//     console.log(z);

//     console.log("c");
// }

// run();




// try ... catch ... finally
// const i = "i";
// console.log("a");

// try {
//     i = "u";
// } catch (e) {
//     console.dir(e);
// } finally {
//     console.log("final");
//     // Finally က ကျိန်းသေပေါက်အလုပ်လုပ်တယ်
// }

// console.log("b");
// console.log("c");




// Promise approximately Async
// promise က JS built-in-object ထဲမှာပါတယ် async ကို handle လုပ်ဖို့ တစ်ခုတည်းသော object
// promise က sync Syntax တွေကို ထိမ်းမယ့် object
// const p = new Promise((resolve, reject) => {
//     // if(true) {
//     //     // resolve is function that return data;
//     //     resolve("Success");
//     // } else {
//     //     // reject is function that return data;
//     //     reject("Fail");
//     // }

//     setTimeout(() => {
//         const num = Math.floor(Math.random() * 10);
//         if(num >= 5) {
//             resolve(num);
//         } else {
//             reject(num);
//         }
//     }, 3000);

// });
// // promise ထဲက constructor ထဲမှာ Callback function တစ်ခုရှိတယ် function ထဲက parameter ထဲမှာ resolve & reject function နှစ်ခုရှိတယ်
// // resolve က အောင်မြင်သွားခဲ့ရင် အလုပ်လုပ်မယ် reject က မအောင်မြင်ရင် အလုပ်လုပ်မယ်

// console.log(p);

// // resolve ထဲက တန်ဖိုးသည် then ထဲကိုရောက်လာမယ်
// p.then((data) => console.log("Success"));
// // reject  ထဲက တန်ဖိုးသည် catch ထဲကိုရောက်လာမယ်
// p.catch((data) => console.log("Fail"));