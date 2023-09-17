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
// promise က async process တွေကို အောင်မြင်လားကျရှုံးလား ထိမ်းမယ့် object
// // promise ထဲက constructor ထဲမှာ Callback function တစ်ခုရှိတယ် function ထဲက parameter ထဲမှာ resolve & reject function နှစ်ခုရှိတယ်
// // resolve က အောင်မြင်သွားခဲ့ရင် အလုပ်လုပ်မယ် reject က မအောင်မြင်ရင် အလုပ်လုပ်မယ်
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

// console.log(p);

// // resolve ထဲက တန်ဖိုးသည် then ထဲကိုရောက်လာမယ်
// p.then((data) => console.log("Success"));
// // reject  ထဲက တန်ဖိုးသည် catch ထဲကိုရောက်လာမယ်
// p.catch((data) => console.log("Fail"));

// const f = fetch('https://dummyjson.com/products/1');
// console.log(f); // return promise
// f.then((data) => data.json()); // promise ကိုပဲ return ထပ်ပြန်ပြီး json() ပြောင်းလိုက်မှ response အနေနဲ့ပြောင်းသွားတယ်
// f.then(json => console.log(json)); // return response




// Async ... Await
// async keyword ကိုသုံးလိုက်တာနဲ့ await keyword ကိုသုံးလို့ရပြီ
// Asynchronous Language ပေါ်မှာ code တွေကို synchronous အလုပ်လုပ်ချင်တယ်ဆိုရင် async...await နဲ့ ထိန်းလို့ရတယ်

// function run() { 
//     // promise ကတော့ async process ကို ပဲထိန်းချုပ်ပြီး resolve ဆို ဒါလုပ် catch ဆို ဒါလုပ်ဆိုပြီး control လုပ်တဲ့ object
//     const product1 = fetch('https://dummyjson.com/products/1');
//     const response1 = product1.then((data) => data.json());
//     response1.then(json => console.log(json));

//     const product2 = fetch();
//     const response2 = product2.then((data) => data.json());
//     response2.then(json => console.log(json));
//     response2.catch(data => console.log("Fail to fetch"));


//     const product3 = fetch('https://dummyjson.com/products/3');
//     const response3 = product3.then((data) => data.json());
//     response3.then(json => console.log(json));

//     const product4 = fetch('https://dummyjson.com/products/4');
//     const response4 = product4.then((data) => data.json());
//     response4.then(json => console.log(json));

//     const product5 = fetch('https://dummyjson.com/products/5');
//     const response5 = product5.then((data) => data.json());
//     response5.then(json => console.log(json));
// }

// run();

// async function asyncRun() { 
//     // sync...await သည် resolve ဖြစ်သွားတဲ့ အလုပ်ကိုပဲလုပ်ပေးသည် reject ဖြစ်တာကိုပါ အလုပ်လုပ်ချင်ရင် promise နဲ့ပြန်သုံးပါ
//     // await သည် စောင့်ပါ လို့ပြောလိုက်ခြင်းဖြစ်သည်
//     const product1 = await fetch('https://dummyjson.com/products/1');
//     // await သုံးလိုက်တာနဲ့ promise မထွက်တော့ပဲ response တန်းထွက်သွားတယ်
//     const response1 = await product1.json();
//     console.log(response1);

//     const product2 = await fetch('https://dummyjson.com/products/2');
//     const response2 = await product2.json();
//     console.log(response2);

//     const product3 = await fetch('https://dummyjson.com/products/3');
//     const response3 = await product3.json();
//     console.log(response3);

//     const product4 = await fetch('https://dummyjson.com/products/4');
//     const response4 = await product4.json();
//     console.log(response4);

//     const product5 = await fetch('https://dummyjson.com/products/5');
//     const response5 = await product5.json();
//     console.log(response5);

//     // ဒါဆိုရင် async...await ရဲ့ focus သည် asynchronous ဖြစ်နေတဲ့ code တွေကို synchronous ဖြစ်အောင် အလုပ်လုပ်ပေးသည်
// }

// asyncRun();


