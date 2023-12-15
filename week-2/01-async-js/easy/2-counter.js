let count = 0;

function increment() {
  console.log(count++);
  setTimeout(increment, 1000);
}
increment();
