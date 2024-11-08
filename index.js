// task 1

let promiseTwo = new Promise((resolve, reject) => { // выполняется как синхронный код
  resolve("a");
});

promiseTwo // цепочка microtasks
.then((res) => {
  return res + "b";
})
.then((res) => {
  return res + "с";
})
.finally((res) => { // finally ничего не возвращает
  return res + "!!!!!!!";
})
.catch((res) => { // не выполнится, никто не вернул reject
  return res + "d";
})
.then((res) => {
  console.log(res); // abc
});

// task 2

function doSmth() {
  return Promise.resolve("123");  // выполнится, когда вызовется функция
}

doSmth()
.then(function (a) { // цепочка microtasks
  console.log("1", a); // 1 123
  return a;
})
.then(function (b) {
  console.log("2", b); // 2 123
  return Promise.reject("321");
})
.catch(function (err) {
  console.log("3", err); // 3 321, вернет промис в состоянии resolve, поэтому заходим вследующий then
})
.then(function (c) { // 4 undefined тк ничего не вернули из catch
  console.log("4", c); // 1 123 2 123 3 321 14 undefined
  return c;
});

// task 3
const arr = [10, 12, 15, 21]

function indexWith3Sec(arr){
  arr.map((el,index)=>
    setTimeout(()=>
      console.log(index)
    ,3000 * index)
  )
}

indexWith3Sec(arr)